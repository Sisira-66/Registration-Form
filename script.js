let USERS_DB =[];

function valid(){
    let firstName = document.getElementById('val-firstname').value
    let lastName = document.getElementById('val-lastname').value
    let email = document.getElementById('val-email').value
    let phone = document.getElementById('val-phone').value
    let batch = document.getElementById('val-batch').value
    let module = document.getElementById('val-module').value
    let checkbox = document.getElementById('tnC').checked
    let valSuccessAlert = document.getElementById('val-alert-success')
    let valFailAlert = document.getElementById('val-alert-fail')
    let errors = false

    USERS_DB = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        phone : phone,
        batch : batch,
        module : module,
        tnC : checkbox
    }
    console.log(USERS_DB)

    if(firstName.length>=3){
        document.getElementById('firstname-valid').style.display = 'block';
        document.getElementById('firstname-invalid').style.display = 'none';
    }else{
        document.getElementById('firstname-invalid').style.display = 'block';
        document.getElementById('firstname-valid').style.display = 'none';
        errors = true;
    }
    if(lastName.length>=3){
        document.getElementById('lastname-valid').style.display = 'block';
        document.getElementById('lastname-invalid').style.display = 'none';
    }else{
        document.getElementById('lastname-invalid').style.display = 'block';
        document.getElementById('lastname-valid').style.display = 'none';
        errors = true;
    }

    if(email.includes('@') &&
        email.indexOf('@') <= email.length -2 &&
        email.indexOf('@')>1
        && email.indexOf('.') + 3 <= email.length){
        document.getElementById('email-valid').style.display = 'block';
        document.getElementById('email-invalid').style.display = 'none';
    }else{
        document.getElementById('email-invalid').style.display = 'block';
        document.getElementById('email-valid').style.display = 'none';
        errors = true;
    }

    if(phone.length ==10 && !isNaN(parseInt(phone))){
        document.getElementById('phone-valid').style.display = 'block';
        document.getElementById('phone-invalid').style.display = 'none';
    }else{
        document.getElementById('phone-invalid').style.display = 'block';
        document.getElementById('phone-valid').style.display = 'none';
        errors = true;
    }

    if(batch !=='None'){
        document.getElementById('batch-valid').style.display = 'block';
        document.getElementById('batch-invalid').style.display = 'none';
    }else{
        document.getElementById('batch-invalid').style.display = 'block';
        document.getElementById('batch-valid').style.display = 'none';
        errors = true;
    }
    
    if(module !=='None'){
        document.getElementById('module-valid').style.display = 'block';
        document.getElementById('module-invalid').style.display = 'none';
    }else{
        document.getElementById('module-invalid').style.display = 'block';
        document.getElementById('module-valid').style.display = 'none';
        errors = true;
    }
   
    if(!checkbox){
        document.getElementById('check-box-invalid').style.display = 'block';
    }else{
        document.getElementById('check-box-invalid').style.display = 'none';
    } 

    if(errors){
        valFailAlert.style.display = 'block';
        valSuccessAlert.style.display = 'none';
    }
    else{
        valSuccessAlert.style.display = 'block';
        valFailAlert.style.display = 'none';
    }

    if(!errors){
        alert("Registration successful")
        reset()
    }
}

function reset(){
    document.getElementById('firstname-valid').style.display = 'none'
    document.getElementById('firstname-invalid').style.display = 'none'

    document.getElementById('lastname-valid').style.display = 'none'
    document.getElementById('lastname-invalid').style.display = 'none'

    document.getElementById('email-valid').style.display = 'none'
    document.getElementById('email-invalid').style.display = 'none'

    document.getElementById('batch-valid').style.display = 'none'
    document.getElementById('batch-invalid').style.display = 'none'

    document.getElementById('module-valid').style.display = 'none'
    document.getElementById('module-invalid').style.display = 'none'

    document.getElementById('phone-valid').style.display = 'none'
    document.getElementById('phone-invalid').style.display = 'none'

    document.getElementById('check-box-invalid').style.display = 'none'

    document.getElementById("val-firstname").value = ""
    document.getElementById("val-lastname").value = ""
    document.getElementById('val-email').value = ""
    document.getElementById('val-phone').value = ""
    document.getElementById('val-batch').value = 'None'
    document.getElementById('val-module').value = 'None'
    document.getElementById('tnC').checked = false
}