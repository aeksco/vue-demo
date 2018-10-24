
window.app = {}

Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <ul class='list-group'>
      <todo-item :item="t" v-for="t in todos" />
    </ul>
  `
})

// Layout Component definition
window.app.layout = {
  template: `
    <div class='row mt-4 pt-4'>

      <div class='col-sm-12 mt-3'>
        <h4>ToDo List</h4>

        <div class='row mb-4'>
          <div class='col-lg-9 pr-0'>
            <input class='form-control form-control-lg' v-model="newTodo">
          </div>
          <div class='col-lg-3'>
            <button class='btn btn-lg btn-block btn-success' @click="addTodo">Add ToDo</button>
          </div>
        </div>
        <todo-list :todos="todos" />
      </div>

    </div>
  `,
  data () {
    return {
      newTodo: '',
      todos: [
        { label: 'Buy Groceries', done: false }
      ]
    }
  },
  methods: {
    addTodo () {
      const myTodo = { label: this.newTodo, done: false }
      this.todos.push(myTodo)
      this.newTodo = ''
    }
  }
};

window.app.splash = {
  template: `
    <div class='row h-100 mt-4 pt-4 align-items-center justify-content-center'>
      <div class='col-lg-12 text-center'>
        <h1 class='my-3'>
          <strong>Tipsy</strong>
        </h1>
        <p class='lead my-3 text-muted'>
          Put tweets into a database and download them like you never have before.
        </p>

        <a href='#/app' class='btn btn-lg btn-outline-primary my-3'>
          <i class='fa fa-twitter mr-2'></i>
          Let's get started
        </a>
      </div>
    </div>
  `
}