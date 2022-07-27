const texten=document.querySelector("textarea");
const btnsvoice=document.querySelector("button");
const langbox=document.querySelector("select");
let syn=speechSynthesis;

function langvoice(){
    for( let v of syn.getVoices())
    {
   // console.log(v);
    
    let option=`<option value="${v.name} ">${v.name}(${v.lang})</option>`;
    langbox.insertAdjacentHTML("beforeend",option);
}
}
syn.addEventListener("voiceschanged",langvoice);

function texttospeech(text){
    let spe = new SpeechSynthesisUtterance(text);
     //for(let voice of syn.getVoices())
     //{
        //if(voice.name===langbox.name)
        //{
            
         spe.voice=speechSynthesis.getVoices().find(voice => voice.voiceURI === langbox.value);
         
        //}
     //}

    speechSynthesis.speak(spe);

}
btnsvoice.addEventListener("click",e => {

    e.preventDefault();
    if(texten.value!=="")
    {
        texttospeech(texten.value);
    }

});
