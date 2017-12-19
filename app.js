window.onload=function(){
	
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
	//~ Add droping of past quiz
	
	new Vue({
	  el: '#app',
	  data: { 
			quiz: quiz,
			questionIndex: 0,
			correctCount: 0,
		    status: ''
	  },
	  methods: {
	    next: function(correct) {
	      this.correctCount += !isNaN(correct); 
	      this.questionIndex++;
	    },
	    prev: function() {
	      this.questionIndex--;
	    },
	    score: function() {
	      return this.correctCount;
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
		
