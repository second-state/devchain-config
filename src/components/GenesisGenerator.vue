<template>
<json-editor ref="JsonEditor" :schema="schema" v-model="model">
    <button @click="submit">submit</button>
    <button @click="reset">Reset</button>
</json-editor>
</template>

<script>
// import vue-json-ui-editor
import JsonEditor from 'vue-json-ui-editor';
export default {
  components: { JsonEditor },
  data: () => ({
    schema: require('@/schema/genesis'),
    // data
    model: {
      genesis_time: '0001-01-01T00:00:00Z',
      chain_id: 'local'
    },
  }),

  methods: {
    submit(_e) {
      alert(JSON.stringify(this.model));
    },
    reset() {
      this.$refs.JsonEditor.reset();
    },
  },
};
</script>