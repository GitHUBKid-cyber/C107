function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tl6VDK8Gs/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}