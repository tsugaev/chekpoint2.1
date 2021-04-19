let phone = {
    brend: 'Honor',
    model: '9 lite',
    phoneStatus: false,
    call: function (name){
        return `я звоню ${name}`
    },
    batteryPower: '50',
    getBatteryPower: function (){
        return `ваша зарядка ${this.batteryPower}%`
    },
    isOn: function (){
        if (this.phoneStatus == true){
            return 'Телефон включен'
        } else {
            return 'Телефон выключен'
        }
    },
    switch: function (){
        if (this.phoneStatus = !this.phoneStatus){

        }

    }
}
console.log(phone.switch())
console.log(phone.phoneStatus)

alert('Alvi лучше!');