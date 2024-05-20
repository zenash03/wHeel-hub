$(document).ready(function() {
    x = 0;

    const promotionBanner = [
        {
            "fileName" : "2024_corola_hatchback.jpeg",
            "title" : "new car arrival",
            "desc" : "2024 corola hatchback",
        },
        {
            "fileName" : "2023_mirai.jpeg",
            "title" : "best seller",
            "desc" : "2023 mirai",
        },
        {
            "fileName": "2024_corola_hybrid.jpeg",
            "title" : "discount car",
            "desc" : "2024 corola hybrid",
        },
        {
            "fileName" : "2024_highlander_hybrid.jpeg",
            "title" : "newest car",
            "desc" : "2024 highlander hybrid",
        },
        {
            "fileName" : "2024_sienna.jpeg",
            "title" : "arrounded",
            "desc" : "2024 sienna",
        },
    ];

    $('.promotion-images').ready(function() {
        // generate content

        promotionBanner.forEach((item, index) => {
            $('.promotion-images').append(
                `<img src='../public/Assets/promotion_banner/${item.fileName}' alt='${item.desc}' class='promotion-image'>`
            )
            $('.promotion-indicator').append(
            `<li class="indicator ${(index==0)? "active" :""}"></li>`
            )
        })
        $.promotionBannerDescInfo(0);
    })


    $('#btnNext').click(function() {
        $.nextBanner();
        $.autoBanner.reset();

    })
    $('#btnPrev').click(function() {
        x = (x >= 100) ? (x-100):400;

        let bannerNum = x / 100;
        $('.promotion-title').animate({
            left : '10%',
            opacity: '0'
        }, 300, "linear")
        setTimeout(() => {
            $('.promotion-title').animate({
                left : '-10%',
                opacity: '0',
            }, 0)
            $('.promotion-title').animate({
                left : '0%',
                opacity: '1'
            }, 800, "linear")
            $('.promotion-images').css('left', -x+"%"); 
            $.promotionBannerDescInfo(bannerNum);
        }, 300);
        $.autoBanner.reset();
    })
    
    $.promotionBannerDescInfo = function(bannerNum) {
        $('#promotionTitle').text(promotionBanner[bannerNum].title);
        $('#promotionDesc').text(promotionBanner[bannerNum].desc);
        $(`.indicator`).removeClass('active');
        $(`.indicator:nth-child(${bannerNum+1})`).addClass('active');
    }

    $.nextBanner = function() {
        x = (x <= 300) ? (x+100):0;

        let bannerNum = x / 100;
        // console.log(bannerNum)
        $('.promotion-title').animate({
            left : '-10%',
            opacity: '0'
        }, 300, "linear")

        setTimeout(() => {
            $('.promotion-title').animate({
                left : '10%',
                opacity: '0',
            }, 0)
            $('.promotion-title').animate({
                left : '0%',
                opacity: '1'
            }, 800, "linear")
            $('.promotion-images').css('left', -x+'%');
            $.promotionBannerDescInfo(bannerNum);
        }, 300);
    }
    $('.promotion-indicator').ready(function() {
        
    })

    // const autoBanner = setInterval(() => {
    //     $.nextBanner;
    // }, 4000)

    function Timer(func, time) {
        let timer = setInterval(func, time);

        this.stop = function() {
            if(timer) {
                clearInterval(timer);
                timer = null;
            }
            return this;
        }
        this.start = function() {
            if (!timer) {
                this.stop();
                timer = setInterval(func, time);
            }
            return this;
        }
        this.reset = function(newTime = time) {
            time = newTime;
            return this.stop().start();
        }
    }
    $.autoBanner = new Timer($.nextBanner, 4000);

    $.autoBanner.start();

})