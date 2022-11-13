$(function(){	
    $('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: false,
		anchors: ['section0','section1', 'section2', 'section3','section4','section5','section6','section7','section8','section9','section10','section11','section12','section13','section14'],
		bigSectionsDestination: top,
		scrollingSpeed: 550,
		onLeave : function(orgin,destination,direction) {
			if(destination == 0) {
				console.log('0');
			} else if (destination == 10) {
				$('.d-i-l1').addClass('d-i-l1-ani')
				$('.d-i-l2').addClass('d-i-l2-ani')
			} else if (destination == 11) {
				$('.p-l1').addClass('p-l1-ani')
				$('.p-l2').addClass('p-l2-ani')
			} else if (destination == 12) {
				$('.mnc-l1').addClass('mnc-l1-ani')
				$('.mnc-l2').addClass('mnc-l2-ani')
			} else if (destination == 13) {
				$('.quiz-l1').addClass('quiz-l1-ani')
				$('.quiz-l2').addClass('quiz-l2-ani')
			} else if (destination == 14) {
				$('.mq-l1').addClass('mq-l1-ani')
				$('.mq-l2').addClass('mq-l2-ani')
			} else if (destination == 15) {
				$('.translator-l1').addClass('translator-l1-ani')
				$('.translator-l2').addClass('translator-l2-ani')
			} else if (destination == 16) {
				$('.cls-1').addClass('cls-1-ani')
			}
		},
		afterLoad : function(orgin,destination,direction){
			if (destination == 0) {
				console.log('0');
			} else if(destination == 2) {
				$('.video-chr1[data-aos]').addClass('aos-animate')
				$('.video-chr2[data-aos]').addClass('aos-animate')
				$('.video-bba[data-aos]').addClass('aos-animate')
				$('.video-jjo[data-aos]').addClass('aos-animate')
			} else if(destination == 3) {
				$('.background-inner[data-aos]').addClass('aos-animate')
				$('.background-bgi[data-aos]').addClass('aos-animate')
				$('.background-gradient[data-aos]').addClass('aos-animate')
			} else if(destination == 4) {
				$('.ssf[data-aos]').addClass('aos-animate')
				new Chart(document.getElementById("pie-chart"), {
					type: 'pie',
					data: {
						// labels: ["필요하다", "필요하지 않다"],
						datasets: [{
							label: "Population (millions)",
							backgroundColor: ["#1A3163", "#FABA5B"],
							data: [104, 1],
						}]
					},
					options: {
						maintainAspectRatio: false,
				
						legend: {
							labels: {
								fontColor: '#fff'
							}
						},
				
						title: {
							display: true,
							text: 'Predicted world population (millions) in 2050'
						}
					}
				});
			} else if(destination == 5) {
				$('.ppf[data-aos]').addClass('aos-animate')
			}  else if(destination == 6) {
				$('.gf[data-aos]').addClass('aos-animate')
			} else if(destination == 7) {
				$('.d1f[data-aos]').addClass('aos-animate')
			} else if(destination == 8) {
				$('.d2f[data-aos]').addClass('aos-animate')
			} else if(destination == 9) {
				$('.cf[data-aos]').addClass('aos-animate')
			} else if(destination == 10) {
				$('.dif[data-aos]').addClass('aos-animate')
			} else if(destination == 11) {
				$('.pf[data-aos]').addClass('aos-animate')
			} else if(destination == 12) {
				$('.mncf[data-aos]').addClass('aos-animate')
			} else if(destination == 14) {
				$('.mqf[data-aos]').addClass('aos-animate')
			} else if(destination == 15) {
				$('.tf[data-aos]').addClass('aos-animate')
			} else if(destination == 16) {
				$('.footer-pre-loader').delay('5000').fadeOut();
				$('.ff[data-aos]').addClass('aos-animate')
				$('.footer-check').addClass('footer-check-ani')
			}

			if(destination != 2) {
				$('.video-chr1[data-aos]').removeClass('aos-animate')
				$('.video-chr2[data-aos]').removeClass('aos-animate')
				$('.video-bba[data-aos]').removeClass('aos-animate')
				$('.video-jjo[data-aos]').removeClass('aos-animate')
			 }
			
			 if(destination != 3) {
				$('.background-inner[data-aos]').removeClass('aos-animate')
				$('.background-bgi[data-aos]').removeClass('aos-animate')
				$('.background-gradient[data-aos]').removeClass('aos-animate')
			 }
			
			 if(destination != 4) {
				$('.ssf[data-aos]').removeClass('aos-animate')
			 }
			
			 if(destination != 5) {
				$('.ppf[data-aos]').removeClass('aos-animate')
			 }
			
			 if(destination != 6) {
				$('.gf[data-aos]').removeClass('aos-animate')
			 }
			
			 if(destination != 7) {
				$('.d1f[data-aos]').removeClass('aos-animate')
			 }
			
			 if(destination != 8) {
				$('.d2f[data-aos]').removeClass('aos-animate')
			 }

			 if(destination != 9) {
				$('.cf[data-aos]').removeClass('aos-animate')
			 }

			 if(destination != 10) {
				$('.dif[data-aos]').removeClass('aos-animate')
			 }

			 if(destination != 11) {
				$('.pf[data-aos]').removeClass('aos-animate')
			 }

			 if (destination !=12) {
				$('.mncf[data-aos]').removeClass('aos-animate')
			}
			
			if (destination !=14) {
				$('.mqf[data-aos]').removeClass('aos-animate')
			}

			if (destination !=15) {
				$('.tf[data-aos]').removeClass('aos-animate')
			}
			
			if (destination !=16) {
				$('.ff[data-aos]').removeClass('aos-animate')
				$('.cls-1').removeClass('cls-1-ani')
			}
		}
	});

	AOS.init();

})