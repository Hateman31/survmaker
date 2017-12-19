window.onload=function(){
	//~ var quiz_maker = new Vue();
	
	var quiz = {
		title: 'Моя викторина',
		questions: [
		  {
			text: "Вопрос 1",
			responses: [
			  {text: 'Неправильно, очень плохо.'}, 
			  {text: 'Правильно!', correct: true}, 
			]
		  }, {
		  text: "Вопрос 2",
			responses: [
			  {text: 'Правильный ответ', correct: true}, 
			  {text: 'Неправильный ответ'}, 
			],
		  }, {
			text: "2+2=?",
			responses: [
				  {text: '4', correct: true}, 
				  {text: '3'}, 
				  {text: '5'}, 
				]
			}
		]
	}

	//~ TODO:
	//~ Добавить очистку результатов 
	
	new Vue({
	  el: '#app',
	  data: { 
			quiz: quiz,
			questionIndex: 0,
		    userResponses: Array(quiz.questions.length).fill(false),
		    status: ''
	  },
	  methods: {
	    next: function() {
	      this.questionIndex++;
	    },
	    prev: function() {
	      this.questionIndex--;
	    },
	    score: function() {
	      return this.userResponses.filter(function(val) { return val }).length;
	    },
	    goToMain: function(){
			this.status = '';
		},
		edit: function(){
			this.status = 'edit';
		},
		play: function(){
			this.status = 'play';
			this.questionIndex = 0;
		}
	  }
	});
};
