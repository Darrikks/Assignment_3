// function is called on calculate price button click
function calculatePrice(){

    var education = document.getElementById("education").value;
    var networth = document.getElementById("networth").value;

    var result = (100 * education * networth);
    console.log('step1', result);

    var caste = document.getElementById("castle").value;
    result = result + parseInt(caste);
    console.log('step2', result);

    var isPlayInstrument = document.getElementById("cbInstrument");
    var isGoodCook = document.getElementById("cbGoodCook");
    var isEasygoingCharacter = document.getElementById("cbEasygoingCharachter");
    var isSingsWell = document.getElementById("cbSingsWell");

    var g_skills_list = [isPlayInstrument, isGoodCook, isEasygoingCharacter, isSingsWell];

    var skills = [];
    g_skills_list.forEach(item => {
        // create skill object
        var skill = {
            checked: item.checked,
            value: item.value
        };
        // append object to array
        skills.push(skill);
    });

    // check what skill is checked and value based on that
    skills.forEach(s => {
        if (s.checked) {
            result += parseInt(s.value);
        }
    });
    console.log('step3', result);

    var age_list = document.getElementsByName("radio_age");
    
    // only one age group can be selected
    age_list.forEach(item => {
       console.log(item.checked, item.value);
       if (item.checked) {
            result *= item.value;
        }
    });

    console.log('step4', result);

    var isGossipsAroundHisParents = document.getElementById("cbGossipsAroundHisParents").value;
    result *= isGossipsAroundHisParents;

    var isGossipsOfHisCharacter = document.getElementById("cbGossipsOfHisCharacter").value;
    result *= isGossipsOfHisCharacter;
    console.log('step5', result);

    var isGossipsArounsHisPerson = document.getElementById("cbGossipsArounsHisPerson").value;
    result += parseInt(isGossipsArounsHisPerson);
    console.log('step6', result);

    console.log(result);
}

