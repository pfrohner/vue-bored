<template>
  <main class="container">
    <h3 class="mb-3">Bored? There is an API for you!</h3>
    <p>Data is saved on localStorage, you can come back to check your list anytime.</p>
    <div class="position-relative" :class="{ disabled: isLoading }">
      <Spinner v-if="isLoading" class="spinner" />
      <b-tabs content-class="mt-3 tabs">
        <b-tab title="Activities" active>
          <Activity :activity="newActivity" @get="getRandomActivity" @add="addActivity" />
        </b-tab>
        <b-tab title="My list">
          <List :activities="activities" @clear="clearAllActivites" />
        </b-tab>
      </b-tabs>
    </div>
  </main>
</template>

<script>
import Activity from "@/components/Activity.vue";
import List from "@/components/List.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Layout",
  data() {
    return {
      isLoading: false,
      newActivity: {},
      activities: []
    };
  },
  components: {
    Activity,
    List,
    Spinner
  },
  created() {
    this.getRandomActivity();
    this.getLocalStorageData();
  },
  methods: {
    addActivity(activity) {
      this.activities.push(activity);
      this.saveToLocalStorage(activity);
      this.showToast("Save successful!");
      this.getRandomActivity();
    },
    clearAllActivites() {
      const confirm = window.confirm("Are you sure?");
      if (confirm) {
        if (localStorage) {
          localStorage.removeItem("bored");
        }
        this.activities = [];
        this.showToast("Items deleted.");
      }
    },
    saveToLocalStorage(activity) {
      if (localStorage) {
        let items = JSON.parse(localStorage.getItem("bored"));
        if (!items) {
          items = [];
        }
        items.push(JSON.stringify(activity));
        localStorage.setItem("bored", JSON.stringify(items));
      }
    },
    getLocalStorageData() {
      if (localStorage) {
        const stored = JSON.parse(localStorage.getItem("bored"));
        if (stored) {
          this.activities = stored.map(event => JSON.parse(event));
        }
      }
    },
    showToast(message, variant = "success") {
      this.$bvToast.toast(message, {
        solid: true,
        appendToast: true,
        variant,
        toaster: "b-toaster-top-center"
      });
    },
    async getRandomActivity() {
      this.isLoading = true;
      try {
        const response = await this.$http.get("/activity");
        this.newActivity = response.data;
      } catch (e) {
        this.showToast(`Something went wrong!<br/ >${e}`, "danger");
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.disabled .tabs {
  opacity: 0.5;
  pointer-events: none;
}
</style>
