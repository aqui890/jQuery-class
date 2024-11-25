// 메인 메뉴 안에 있는 li태그에 마우스를 올렸을때 서브메뉴가 나타난다.
console.log("hi")
$(".main-menu > li").mouseenter(function(){
    $(this).children(".sub-menu").show();
})

$(".main-menu > li").mouseleave(function(){
    $(this).children(".sub-menu").hide();
})

$(".gallery").hide();

$(".btn-gallery").click(function() {
    $(".gallery").show();
    $(".news").hide();
});

$(".btn-news").click(function() {
    $(".gallery").hide();
    $(".news").show();
});

//Open-Modal(첫번쨰 공지사항)을 클리개했을때 modal이 show

$(".Open-Modal").click(function() {
    $(".modal").show("slow");
})

//btn-close(닫기 버튼)을 클릭했을때 modal이 hide

$(".btn-close").click(function() {
    $(".modal").hide("slow");
})