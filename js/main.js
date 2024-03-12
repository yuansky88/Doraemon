function slider(){
    setInterval(() => {
        ImgNum = Number($("#slider-img").attr("src").substr(8, 1));
        if (ImgNum == 5) ImgNum = 0;
        ImgNum++;
        $("#slider-img").fadeOut(400, () => {
            $("#slider-img").attr({
                src: `img/dola${ImgNum}.png`,
            });
            $("#slider-node").children().removeClass("choosed");
            setTimeout(() => {
                $("#slider-img").fadeIn(390, () => {
                    $("#slider-node span")
                        .eq(ImgNum - 1)
                        .addClass("choosed");
                });
            }, 10);
        });
    }, 4000);// 修改4000这个数值可以调整轮播图的切换间隔
}
