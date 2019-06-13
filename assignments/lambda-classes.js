// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
      this.name = attrs.name;
      this.age = attrs.age;
      this.location = attrs.location;
    };
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
  class Instructor extends Person{
    constructor(attrs){
      super(attrs);
      this.specialty = attrs.specialty;
      this.favLanguage = attrs.faveLanguage;
      this.catchPhrase = attrs.catchPhrase;
    };
    demo(subject){
      return `Today we are learning about ${subject}`;
    };
    grade(student,subject){
      this.name = student.name;
      return `${student.name} receives a perfect score on ${subject}`;
    }
  }
  
  class Student extends Person{
    constructor(attrs){
      super(attrs);
      this.previousBackground = attrs.previousBackground;
      this.className = attrs.className;
      this.favSubjects = attrs.favSubjects;
    };
    listsSubjects(){
      return this.favSubjects;
    };
    PRAssignment(student,subject){
      return `${student.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(student,subject){
      return `${student.name} has begun sprint challenge on ${subject}`;
    }
  }
  
  class ProjectManager extends Instructor{
    constructor(attrs){
      super(attrs);
      this.gradClassName = attrs.gradClassName;
      this.favInstructor = attrs.favInstructor;
    };
    standUp(name,channel){
      return `${name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(name,student,subject){
      return `${name} debugs ${student.name}'s code on ${subject}`;
    }
  }
  
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  
  const jay = new Person({
    name: 'Jay',
    location: 'Boston',
    age: 24
  })
  
  const alex = new Student({
    previousBackground: 'Entrepreneurship',
    className: 'MSEL',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  })
  
  console.log(fred.speak());//Hello my name is Fred, I am from Bedrock
  console.log(fred.demo('English'));//Today we are learning about English
  console.log(fred.grade(jay,'Coding'));//Jay receives a perfect score on Coding
  console.log(alex.listsSubjects());//[ 'Html', 'CSS', 'JavaScript' ]
  console.log(alex.PRAssignment(fred,'CSS'));//Fred has submitted a PR for CSS
  console.log(alex.sprintChallenge(fred,'HTML'))//Jay has begun sprint challenge on HTML
  