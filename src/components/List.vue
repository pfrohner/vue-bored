<template>
  <section>
    <table class="table text-left" v-if="$props.activities.length">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Activity</th>
          <th scope="col">Type</th>
          <th scope="col">Participants</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in $props.activities" :key="activity.key">
          <th scope="row">{{ activity.key }}</th>
          <td>{{ activity.activity }}</td>
          <td>{{ activity.type }}</td>
          <td>{{ activity.participants }}</td>
        </tr>
        <tr>
          <td colspan="4">
            <button
              data-test="clear-btn"
              class="btn btn-danger btn-block"
              @click="$emit('clear')"
            >Clear all</button>
          </td>
        </tr>
      </tbody>
    </table>
    <template v-else>
      <p data-test="empty-msg">Your list is empty.</p>
    </template>
  </section>
</template>

<script>
export default {
  name: "MyList",
  props: {
    activities: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.table th,
.table td {
  border-top: 0 !important; /* meh :-/ */
}
</style>
