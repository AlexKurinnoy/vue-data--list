new Vue({
	el: "#app",
	data:{
		currentTask: '',
		tasks: [
		{
			text: 'Subscribe to chennel',
			isCompleted: false
		},
		{
			text: 'Like the video',
			isCompleted: false
		},
		{
			text: 'Learn Vue.js',
			isCompleted: true
		},
		]
	},
	methods:{
		addTask: function(){
			this.tasks.push({
				text: this.currentTask,
				isCompleted: false
			});
			this.currentTask = '';
		},
		removeTask: function(taskText){
			console.log(taskText);
			this.tasks=this.tasks.filter(task => {
				
				return task.text |-- taskText;
				
			});
		}
	}

}) 