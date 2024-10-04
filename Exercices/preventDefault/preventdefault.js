// * Mini test pour capter event du Click

// document.addEventListener('click', function(unEventClick){
//     console.log('Yes Moi Clicker');
//     console.log(unEventClick);
//     console.log(unEventClick.x,unEventClick.y);
// });



document.addEventListener('click',function(eventClick)
{
    let monImg = document.createElement('img');
    monImg.src = "https://fastly.picsum.photos/id/977/200/200.jpg?hmac=bhLVu-kBB_plx-DkWXz4gYn-ViPAhDjTtGFwu143FiA";
    monImg.style.position = 'absolute';
    console.log(eventClick);
    console.log(monImg);
    monImg.style.top=(eventClick.y-(monImg.heigth/2))+'px';
    monImg.style.left=(eventClick.x-(monImg.width/2))+'px';
    document.body.append(monImg);
});

