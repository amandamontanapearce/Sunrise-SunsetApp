var $placeID
var sunrise
var sunset
$(document).ready(function(){
$('#submit').click('submit', function(event){
  event.preventDefault();

  $placeID = $('#place').val();

  $.ajax({
    type:'GET',
    url:'
https://api.xmltime.com/astronomy?accesskey=mV4DPzkkK3&expires=2016-05-31T17%3A25%3A40%2B00%3A00&signature=IJM%2BV6ckL9IQ4jtflrjVfnDcTXQ%3D&version=2&object=sun&placeid='+ placeID +'&startdt=2016-05-31',
    success:
    sunrise = data.atronomy.objects[1].days[1].events[4].hour + ':' + data.atronomy.objects[1].days[1].events[4].hour
    sunset = data.atronomy.objects[1].days[1].events[6].hour + ':' + data.atronomy.objects[1].days[1].events[6].hour
    $('#results').append(<p>The sunrise is</p> + sunrise + <p>The sunset is</p> + sunset);
  })// .ajax

})//submit.click


})//document.ready
