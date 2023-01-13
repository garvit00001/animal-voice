function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=m15.soundClassifier('https://teachablemachine.withgoogle.com/models/2csvdcxvk/model.json',modalReady);
}
function modalReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_lable").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_lable").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        
        img=document.getElementById('a1');
        img1=document.getElementById('a2');
        img2=document.getElementById('a3');
        img3=document.getElementById('a4');

        if(results[0].label=="cow"){
            img.src='cow.gif';
            img1.src='horse.jpg';
            img2.src='elephant.jpg';
            img3.src='tiger.jpg';
        } else if(results[0].label=="horse"){
            img.src='Cow.jpg';
            img1.src='horse.gif';
            img2.src='elephant.jpg';
            img3.src='tiger.jpg';
        } else if(results[0].label=="elephant"){
            img.src='Cow.jpg';
            img1.src='horse.jpg';
            img2.src='elephant.gif';
            img3.src='tiger.jpg';
        } else{
            img.src='Cow.jpg';
            img1.src='horse.jpg';
            img2.src='elephant.jpg';
            img3.src='tiger.gif';
        
    
}