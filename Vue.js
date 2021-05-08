let app = new Vue({
    el: '#app',
    data: {
        list:"" ,
        lists:[],
    },
    methods:{
        showingTask(){
            this.lists.push(this.list)
            
        },
       
    }
  })