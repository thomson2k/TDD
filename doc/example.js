function dodaj() {
	return 4
}

function testDodaj() {
	var wynik = dodaj(2, 2)

	if(wynik == 4){
		console.log('ok')
	} else {
		console.log('wynik powinien byc 4 a jest', wynik)
	}
}

function testDodaj2() {
	var wynik = dodaj(0, 2)

	if(wynik == 2){
		console.log('ok')
	} else {
		console.log('wynik powinien byc 2 a jest', wynik)
	}
}

function testDodaj3() {
	var wynik = dodaj(-1, -1)

	if(wynik == 2){
		console.log('ok')
	} else {
		console.log('wynik powinien byc -2 a jest', wynik)
	}
}
function testDodaj4() {
	var wynik = dodaj(0, 0)

	if(wynik == 0){
		console.log('ok')
	} else {
		console.log('wynik powinien byc 0 a jest', wynik)
	}
}


testDodaj()
testDodaj2()
testDodaj3()
testDodaj3()