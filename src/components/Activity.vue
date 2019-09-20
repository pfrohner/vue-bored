<template>
  <section class="mb-3">
    <div class="row text-left">
      <div class="col-sm-6">
        <p>You should:</p>
        <label for="name">Activity</label>
        <textarea
          v-model="newActivity.activity"
          class="md-textarea form-control mb-3"
          rows="5"
          id="name"
        />
      </div>
      <div class="col-sm-6">
        <p>Activity details:</p>
        <div class="form-group">
          <label for="type">Type</label>
          <input type="text" class="form-control" id="type" :value="newActivity.type" />
        </div>
        <div class="form-group">
          <label for="participants">Participants</label>
          <input
            type="text"
            class="form-control"
            id="participants"
            :value="newActivity.participants"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <button
          data-test="add-btn"
          class="btn btn-danger btn-block mb-3"
          @click="$emit('add', newActivity)"
        >Save for later!</button>
      </div>
      <div class="col-sm-6">
        <button
          data-test="get-btn"
          class="btn btn-primary btn-block mb-3"
          @click="$emit('get')"
        >Hit me with a new one!</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      newActivity: {}
    };
  },
  watch: {
    activity: function(attrs) {
      this.newActivity = { ...attrs };
    }
  },
  props: {
    activity: {
      type: Object,
      required: true
    }
  }
};
</script>
