Vue.component('todo-item', {
  props: ['item'],
  computed: {
    icon () {
      if (this.item.done) {
        return 'fa fa-lg text-success fa-check'
      }
      return 'fa fa-lg text-danger fa-times'
    }
  },
  template: `
    <li class='list-group-item border-light bg-dark'>
      <p class='lead mb-0'>
        <i :class="icon" @click="item.done = !item.done"></i>
        {{ item.label }}
        </p>
    </li>
  `
})
