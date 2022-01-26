
    function validation(){
        var user = document.getElementById('user123').value;
        var mail = document.getElementById('email').value;
        var book = document.getElementById('book').value;
        var quantity = document.getElementById('quantity').value;
        var number = document.getElementById('number').value;

        console.log(user, mail, book, quantity, number);
        console.log(number.length);
        if(user === ''|| mail === '' || book === '' || quantity === '' || number === ''){
            alert('Any Field Cannot be Empty.')
            return false;
        }else if(number.length != 10){
            alert('Phone number not valid!!')
        }
        
    }






