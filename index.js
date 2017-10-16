const Alexa = require('alexa-sdk')
exports.handler = function(event, context, callback){
  const alexa = Alexa.handler(event, context, callback)
  alexa.appId = 'amzn1.ask.skill.9a348feb-4a4e-4db8-84c8-e1b0145e0e47'
}
 const milestones = [
  {
    amount: 100,
    questions: [
      {
        question: 'On which would you air laundry?',
        answers: {
          a: 'Clothes horse',
          b: 'Clothes dog',
          c: 'Clothes pig',
          d: 'Clothes rabbit'
        },
        correctAnswer: 'a'
      }
    ]
  },
  {
    amount: 200,
    questions: [
      {
        question: 'What name is given to a person who is against increasing the powers of the European Union?',
        answers: {
          a: 'Euro trash',
          b: 'Eurostar',
          c: 'Eurovision',
          d: 'Euro skeptic'
        },
        correctAnswer: 'd'
      }
    ]
  },
  {
    amount: 300,
    questions: [
      {
        question: 'What is butterscotch?',
        answers: {
          a: 'A garden flower',
          b: 'Shortbread',
          c: 'A pavement game',
          d: 'Brittle toffee'
        },
        correctAnswer: 'd'
      }
    ]
  },
  {
    amount: 500,
    questions: [
      {
        question: 'Which of these is a nickname for a famous Scottish army regiment?',
        answers: {
          a: 'Black Watch',
          b: 'Black Sea',
          c: 'Black Widow',
          d: 'Black Cat'
        },
        correctAnswer: 'a'
      }
    ]
  },
  {
    amount: 1000,
    questions: [
      {
        question: 'The Normans who invaded and conquered England in 1066 spoke which language?',
        answers: {
          a: 'French',
          b: 'Danish',
          c: 'Norwegian',
          d: 'German'
        },
        correctAnswer: 'a'
      }
    ]
  },
  {
    amount: 2000,
    questions: [
      {
        question: 'In Coronation Street, who is Audrey\'s daughter?',
        answers: {
          a: 'Gail',
          b: 'Janice',
          c: 'Linda',
          d: 'Sally'
        },
        correctAnswer: 'a'
      }
    ]
  },
  {
    amount: 4000,
    questions: [
      {
        question: 'The River Foyle is found in which part of the UK?',
        answers: {
          a: 'Northern Ireland',
          b: 'Wales',
          c: 'Scotland',
          d: 'England'
        },
        correctAnswer: 'a'
      }
    ]
  },
  {
    amount: 8000,
    questions: [
      {
        question: 'Who was the second husband of Jacqueline Kennedy?',
        answers: {
          a: 'Aristotle Onassis',
          b: 'Adnan Khashoggi',
          c: 'Rupert Murdoch',
          d: 'Ronald Reagan'
        },
        correctAnswer: 'a'
      }
    ]
  },
  {
    amount: 16000,
    questions: [
      {
        question: 'Emmenthal is a cheese from which country?',
        answers: {
          a: 'France',
          b: 'Italy',
          c: 'The Netherlands',
          d: 'Switzerland'
        },
        correctAnswer: 'd'
      }
    ]
  },
  {
    amount: 32000,
    questions: [
      {
        question: 'Who had a hit UK album with Born To Do It, released in 2000?',
        answers: {
          a: 'Coldplay',
          b: 'Craig David',
          c: 'A1',
          d: 'Toploader'
        },
        correctAnswer: 'b'
      }
    ]
  },
  {
    amount: 64000,
    questions: [
      {
        question: 'Gentleman versus Players was an annual match between amateurs and professionals of which sport?',
        answers: {
          a: 'Cricket',
          b: 'Rugby Union',
          c: 'Lawn tennis',
          d: 'Polo'
        },
        correctAnswer: 'a'
      }
    ]
  },
  {
    amount: 125000,
    questions: [
      {
        question: 'The Ambassadors in the National Gallery is a painting by which artist?',
        answers: {
          a: 'Rembrandt',
          b: 'Holbein',
          c: 'Michelangelo',
          d: 'Van Eyck'
        },
        correctAnswer: 'b'
      }
    ]
  },
  {
    amount: 250000,
    questions: [
      {
        question: 'What type of garment is Anthony Eden?',
        answers: {
          a: 'Tie',
          b: 'Overcoat',
          c: 'Shoe',
          d: 'Hat'
        },
        correctAnswer: 'd'
      }
    ]
  },
  {
    amount: 500000,
    questions: [
      {
        question: 'Baron Haussman is best known for the planning of which city?',
        answers: {
          a: 'Paris',
          b: 'Rome',
          c: 'Athens',
          d: 'Berlin'
        },
        correctAnswer: 'a'
      }
    ]
  },
  {
    amount: 1000000,
    questions: [
      {
        question: 'A number one followed by 100 zeroes is known by what name?',
        answers: {
          a: 'Gigabit',
          b: 'Googol',
          c: 'Nanomole',
          d: 'Megatron'
        },
        correctAnswer: 'b'
      }
    ]
  }
]

const helper = {
  getAmount (counter){
    const milestone = milestones[counter]
    const amount = milestone.amount
    return `For <emphasis level="strong">£${amount}</emphasis><break time="1s"/>`
  },
  getQuestion (counter){
    const milestone = milestones[counter]
    const question = milestone.questions[0]

    return `<emphasis level="moderate">${question.question}</emphasis><break time="1s"/>`
  },
  getAnswers (counter) {
    const milestone = milestones[counter]
    const question = milestone.questions[0]

    return `a. ${question.answers.a}<break time="1s"/>` +
      `b. ${question.answers.b}<break time="1s"/>` +
      `c. ${question.answers.c}<break time="1s"/>` +
      `d. ${question.answers.d}<break time="1s"/>`
  },
  getAnswer (counter, letter){
    letter = letter.toLowerCase()

    const milestone = milestones[counter]
    const question = milestone.question[0]

    return {
      letter: letter,
      text: question.answer[letter]
    } 
  },
  getCorrectAnswer (counter){
    const milestone = milestones[counter]
    const question = mielstone.questions[0]

    return {
      letter: question.correctAnswer,
      text: question.answers[question.correctAnswer]
    }
  }
}

const WELCOME_MESSAGE = 'Welcome to Who Wants To Be A Millionaire! To begin, say "start a game"'
const START_MESSAGE = 'You will be asked a question, followed by 4 answers. Answer the question with the word "answer" along with the letter that corresponds to your answer. Let\'s kick off with the first question!<break time="1s"/>'
const REPROMPT_SPEECH = 'Please answer with the word "answer" along with A, B, C or D. You can also say "repeat the question".'
const HELP_MESSAGE = 'To begin, say "start a game". <break time="1s"/>Answer questions with the word "answer" followed by the letter of the question.'

const states = {
  START: '_START',
  QUESTIONS: '_QUESTIONS'
}

const handlers = {
  LaunchRequest () {
    this.handler.state = states.START
    this.emitWithState('Start')
  },
  QuestionsIntent () {
    this.handler.state = states.QUESTIONS
    this.emitWithState('Questions')
  },
  Unhandled () {
    this.handler.state = states.START
    this.emitWithState('Start')
  }
}