$(document).ready(function () {


    let arrow = $('.down');
    $(arrow).first().css('display', 'inline-block');
    $('.service-item').click(function (e) {
        $('.service-item').removeClass('service-active');
        $(e.target).addClass('service-active');
        let index = $('.service-item').index(this);
        let img = $('.service-img');
        let text = $('.service-text');

        $(arrow).css('display', 'none');
        $('.service-item').css({
            'backgroundColor': '#ebf2ff',
            'color': '#717171'
        });

        switch (index) {
            case (0):
                $(this).find(arrow).css("display", "inline-block");
                $(this).css({
                    'backgroundColor': '#18cfab',
                    'color': '#fff'
                });
                $(img).attr('src', 'img/web design/wb1.png');
                $(text).text('Corporis, cumque cupiditate debitis delectus deleniti est expedita harum ipsa laboriosam, modi numquam officia pariatur perferendis possimus quam qui quisquam rem sit ullam unde vero voluptas voluptatem. Ab accusamus accusantium, simos distinctio doloremque libero nulla repudiandae sunt vero voluptatibus voluptatum? Consequatur debitis dignissimos, dolores dolorum eos, et excepturi iendis sint soluta ut vero, voluptate, voluptatibus voluptatum? A, amet debitis dolorem iure quod sapiente suscipit! Assumenda culpa, cupiditate distinctio doloribus eveniet fugit impedit ipsam ipsum, modi nam necessitatibus quae repellat sit vero vitae? Adipisci, beatae est exercitationem laboriosam odit sit.');
                break;
            case (1):
                $(this).find(arrow).css("display", "inline-block");
                $(this).css({
                    'backgroundColor': '#18cfab',
                    'color': '#fff'
                });
                $(img).attr('src', 'img/web design/wb2.jpg' );
                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus quia voluptatem corrupti quaerat, esse quidem alias nostrum dignissimos iste praesentium deleniti, non numquam magni nam nesciunt, soluta quasi libero veniam! Rem hic doloribus eveniet blanditiis corporis perspiciatis ratione quaerat.');
                break;
            case (2):
                $(this).find(arrow).css("display", "inline-block");
                $(this).css({
                    'backgroundColor': '#18cfab',
                    'color': '#fff'
                });
                $(img).attr('src', 'img/web design/wb3.jpg');
                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quis nulla totam, nihil, voluptas omnis vel facilis veniam perferendis doloremque ipsa adipisci voluptatibus distinctio ex esse. Saepe minima quidem, perspiciatis unde molestiae nobis, quo dolor voluptatibus, obcaecati, quam suscipit itaque nam error laboriosam dolorum laudantium sit voluptatem. Eaque veritatis ipsam blanditiis possimus eos doloremque adipisci, eius, totam natus illum, vitae mollitia non iure! Aperiam facere, harum, delectus doloribus cumque, dignissimos incidunt dolorem alias sit, at nostrum enim. Cum optio doloremque quos earum labore, ea rerum inventore, minus delectus dolores quod!');
                break;
            case (3):
                $(this).find(arrow).css("display", "inline-block");
                $(this).css({
                    'backgroundColor': '#18cfab',
                    'color': '#fff'
                });
                $(img).attr('src', 'img/web design/wb4.jpg');
                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus doloribus nam, provident unde delectus architecto perspiciatis sunt eius! Amet repudiandae quae et quod voluptates sequi culpa modi sit dolor quisquam praesentium beatae repellendus officia enim, maxime, saepe blanditiis facilis omnis placeat necessitatibus. Sit deleniti reiciendis labore quasi sequi dolorem, qui neque non officia suscipit obcaecati expedita rem enim, porro? Commodi hic quia, unde deleniti? Neque, nostrum amet dolor maxime esse quibusdam iste, doloribus repellendus magni vero, ad aspernatur blanditiis voluptas!');
                break;
            case (4):
                $(this).find(arrow).css("display", "inline-block");
                $(this).css({
                    'backgroundColor': '#18cfab',
                    'color': '#fff'
                });
                $(img).attr('src', 'img/web design/wb1.png');
                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aspernatur autem magni reprehenderit, libero, officia deserunt quidem nesciunt modi eaque inventore laboriosam enim voluptate, laborum! Necessitatibus dolor ducimus, quaerat totam quod quis! Et ducimus est dignissimos quia sequi quisquam, unde obcaecati ut delectus accusamus asperiores optio quis exercitationem impedit autem iste incidunt, nemo fugit. Fugit similique esse exercitationem autem, earum laudantium eius, provident dolorum cum ab delectus quod eum voluptatem iste dolores illum odit impedit quasi eos adipisci voluptatum omnis. Fuga explicabo magni, error odio nulla?');
                break;
            case (5):
                $(this).find(arrow).css("display", "inline-block");
                $(this).css({
                    'backgroundColor': '#18cfab',
                    'color': '#fff'
                });
                $(img).attr('src', 'img/web design/wb3.jpg');
                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic earum beatae ratione alias dolorum laboriosam totam reprehenderit quibusdam dignissimos! Repellendus nam distinctio laboriosam nulla asperiores amet alias, provident, eligendi, suscipit ullam nemo, inventore rerum officiis animi cum! Optio nisi repellat veritatis, sunt expedita molestias nostrum, quisquam quae officiis quas ullam tempora deserunt rerum quam vitae itaque nobis nesciunt maiores! Commodi totam, vitae aut molestiae culpa.');
                break;
            default:
        }
    });


    $(function() {

        let selectedClass = "";
        let gallery = $('#gallery');
        let loadMore = $('.load-more');

        $(".filter").click(function(){
            $(".filter").removeClass("portfolio-active");
            
            $(this).addClass("portfolio-active");
            selectedClass = $(this).attr("data-rel");
       
            $("#gallery div").fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
            }, 300);
            if($("."+selectedClass).length > 12){
                
                $(loadMore).css("display","block");
                $(gallery).css('max-height','639px');
                $(".NoContent").first().css("display","none")
            }else {
              $(loadMore).css("display","none");
              $(".NoContent").first().css("display","block")
            }
        });

        $(loadMore).click(function() {
          let maxHeight = $(gallery).css('max-height');
          $(gallery).css('max-height', "+=635px");

          if (maxHeight.slice(0,-2) > 1257) {
             $(loadMore).css("display","none");
              $(".NoContent").first().css("display","block")    
          }
        });
    });


    $('.gallery-item').hover(function() {
        if ($(this).hasClass('graphic')) {
            $(this).append($("<div class='portfolio-hover'><div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class = 'portfolio-info'><p>CREATIVE DESIGN</p><p>CREATIVE DESIGN</p></div></div>"));
        }
        if ($(this).hasClass('web')) {
            $(this).append($("<div class='portfolio-hover'><div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class = 'portfolio-info'><p>CREATIVE DESIGN</p><p>CREATIVE DESIGN</p></div></div>"));
        }
        if ($(this).hasClass('wordpress')) {
            $(this).append($("<div class='portfolio-hover'><div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class = 'portfolio-info'><p>CREATIVE DESIGN</p><p>CREATIVE DESIGN</p></div></div>"));
        }
        if ($(this).hasClass('landing')) {
            $(this).append($("<div class='portfolio-hover'><div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class = 'portfolio-info'><p>CREATIVE DESIGN</p><p>CREATIVE DESIGN</p></div></div>"));
        }
        $('.portfolio-hover').animate({
            bottom: 0,
        },550)
        },
              function() {
          $(this).find(".portfolio-hover").remove();
        }
    );


      const slider = () => {
        const leftBtn = $('.left-slide');
        const rightBtn = $('.right-slide');
        const slides = $('.reviewer-img');
        const slidesArr = Array.prototype.slice(slides);
        const reviews = $('.review-text');
        
        const bigReview = $('.big-reviewer');
    
        let countIndex = slides.length - 1;
        let countSlide = 2;
    
        const clearActive = () => {
            const clearActiveReviewer = $('.active-reviewer');
            const clearActiveReview = $('.active-review');
            const clearActiveBigReview = $('.active-big-review');
            
                      
            $(clearActiveBigReview).fadeOut(0);
            $(clearActiveReview).fadeOut(0);
    
            clearActiveReviewer.removeClass('active-reviewer');
            clearActiveReview.removeClass('active-review');
            clearActiveBigReview.removeClass('active-big-review');


            
        };
    
        const setActive =(index) => {
            
            slides[index].classList.add('active-reviewer');
            reviews.each((i,elem) => {
               
                if(elem.dataset.review === slides[index].dataset.review){
                    
                    $(elem).fadeIn();
                    elem.classList.add('active-review');
                }
            });
            bigReview.each((i,elem) => {
                
                    if (elem.dataset.review === slides[index].dataset.review) {
                        
                        elem.classList.add('active-big-review');
                        $(elem).fadeIn();
                    }
                }
            )
        };
    
        slides.click(
         function(){
               
               clearActive();
               
               countSlide = slides.index(this);
    
               setTimeout( setActive(countSlide),900);
           });

        
    
        leftBtn.click( () => {
            clearActive();
    
            if(countSlide === 0){
                countSlide = countIndex;
            }else{
                countSlide -= 1;
            }
            setActive(countSlide);
        });
    
        rightBtn.click (() => {
            clearActive();
    
            if(countSlide === countIndex){
                countSlide = 0;
            }else{
                countSlide += 1;
            }
            setActive(countSlide);
        })
    
    };
    slider();
     
      
})

