var car  = {
			make: 'VW',
			type: 'Polo',
			color: 'brown',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat1', 'seat2', 'seat3', 'seat4', 'seat5'],
			turnOn: function (){
				this.isTurnedOn = true;
				return 'car is turned on';
			},
			fly: function (){
				alert('fly');
			},
			switchCar: function(isOn){
				console.log('turn car ' + isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				};
			}
		};
		console.log('hello friends');

var sayMyName = function(name){
	alert('My Name is:' + name);
};		

var doCoolStuff = function(){
	var currentClassName = document.getElementById('cool').className;

	if(currentClassName == 'cool'){
	document.getElementById('cool').className = 'cool red';	
} else {
	document.getElementById('cool').className = 'cool';
};
};
