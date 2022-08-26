function moyeuPlus(){
	var txt = document.getElementById("textMoyeu");
	txt.innerHTML="<ul>"+
						"<li>Les vitesses non indexées sur la transmission d'origine créent un risque de déraillage important. Pour cette raison, la transmission est systématiquement remplacée par un moyeu à vitesses intégrées qui permet : </li><br>"+
						"<li>de ne jamais dérailler, ne jamais "+'"louper"'+" un passage de vitesses</li>"+
						"<li>de passer les vitesses à l'arrêt, ce qui peut s'avérer utile en ville</li>"+
						"<li>de limiter l'entretien à réaliser</li>"+
  "<li>d'épurer la ligne du vélo en supprimant les dérailleurs </li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moyeuMoins()" role="button">Réduire</a>'+ 
					"</div>";
}

function moyeuMoins(){
	var txt = document.getElementById("textMoyeu");
	txt.innerHTML="<ul>"+
						"<li>Moyeux de type SHIMANO NEXUS 5 ou 7 vitesses intégrées</li>"+
						"<li>Fiable</li>"+
						"<li>Confortable</li>"+
						"<li>Entretien facilité</li>"+
						"<li>Discret</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moyeuPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}

function moteurPlus(){
	var txt = document.getElementById("textMoteur");
	txt.innerHTML="<div>"+
  "Si le moteur central est nettement préférable pour un usage sportif ou de longues distances, le moteur à l'avant convient parfaitement à une utilisation en ville. <br><br>"+
  "Notre moteur dans la roue avant à entraînement direct <br><br>"+
   
  "<ul>"+
  	"<li>2,0 kg (~1 kg de moins qu'un moteur central) </li>"+
  	"<li>250 W de puissance, 40 Nm de couple, offrant une puissance suffisante pour vous aider au démarrage ou dans les côtes dans la plupart des zones urbaines => idéal pour un utilisateur de moins de 100 kg.</li>"+
    "<li>Silencieux car ne contenant pas d'engrenage</li>"+
    "<li>Adaptable sur un vélo vintage</li>"+
   
  "</ul>"+
  
"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moteurMoins()" role="button">Réduire</a>'+ 
					"</div>";
}
function moteurPlus2(){
	var txt = document.getElementById("textMoteur2");
	txt.innerHTML="<div>"+
  "Le moteur central <br><br>"+
  "Est le standard sur les VAE neufs : il offre un couple important et une bonne sensation d'accompagnement du pédalage. Mais il nécessite un cadre spécifique, dont le style est très sportif (VTT) <br><br>"+
  "De notre point de vue, c'est le compagnon idéal pour des randonnées de 80 km mais il est surdimensionné pour un usage urbain <br><br>"+
  "Le moteur à l'avant nous semble une solution préférable en ville. Il"+ 
  "<ul>"+
    "<li>Est plus légér (~1 kg de moins)</li>"+
    "<li> Est silencieux car il ne contient pas d'engrenage</li>"+
    "<li>Suffit amplement pour un trajet de 10 km en zone urbaine</li>"+
  "</ul>"+
  
"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moteurMoins2()" role="button">Réduire</a>'+ 
					"</div>";
}

function moteurMoins(){
	var txt = document.getElementById("textMoteur");
	txt.innerHTML="<div>"+
				 		"Moteur dans la roue avant"+
				 	"</div>"+					
					"<ul>"+
						"<li>Léger</li>"+
						"<li>Suffisant pour vous assister au démarrage ou en côte</li>"+
						"<li>Silencieux</li>"+						
					"</ul>"+ 
					"<div>"+
						"Idéal pour un utilisateur de moins de 100 kg."+
					"</div>"+

					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moteurPlus()" role="button">En savoir plus</a>'+ 
					"</div>";

}
function moteurMoins2(){
	var txt = document.getElementById("textMoteur2");
	txt.innerHTML="<div>"+
				 		"Moteur dans la roue avant PROMOVEC à entraînement direct (non réducté)"+
				 	"</div>"+					
					"<ul>"+
						"<li>2,0 kg</li>"+
						"<li>250 W de puissance</li>"+
						"<li>40 N.m de couple</li>"+						
					"</ul>"+ 
					"<div>"+
						"Idéal pour un utilisateur de moins de 100 kg."+
					"</div>"+

					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="moteurPlus2()" role="button">En savoir plus</a>'+ 
					"</div>";

}

function freinagePlus(){
	var txt = document.getElementById("textFreinage");
	txt.innerHTML="<div>"+
				  "Un système de freinage est composé de 3 éléments :"+
				  "<ul>"+
				    "<li>La pièce de frottement : disque, patins, tambour</li>"+
				    "<li>Les leviers de commande sur le guidon</li>"+
				    "<li>La transmission de commande : par câble ou par pression hydraulique</li>"+
				  "</ul>"+
				  "Nous avons opté pour un frein à patins montés sur l'étrier d'origine <br> <br>"+
				  "<ul>"+
				  	"<li>le frottement est accru car la jante est en aluminium</li>"+
				  	"<li>l'ensemble des composants sont remis en état : câbles, gaines et patins</li>"+
			  	"</ul>"+
			  	"Enfin les leviers sont remplacés par des leviers qui coupent l'alimentation du moteur dès qu'ils sont actionnés pour plus de sécurité"+
				 
				  
				"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="freinageMoins()" role="button">Réduire</a> '+
					"</div>";
}

function freinageMoins(){
	var txt = document.getElementById("textFreinage");
	txt.innerHTML = "Système de freinage amélioré <br><br>"+
			 	"Style préservé <br><br>"+
			 	"Sécurité accrue"+			
					
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="freinagePlus()" role="button">En savoir plus</a>'+
					"</div>";
}

function batteriePlus(){
	var txt = document.getElementById("textBatterie");
	txt.innerHTML = "<ul>"+
						"<li>Nous avons opté pour une batterie format "+'"bidon'+ "d'"+"eau" +"aux dimensions réduites (H = 280 mm et diamètre = 80 mm)</li>"+
						"<li>Pour une utilisation quotidienne sur de faibles distances, nous avons privilégié le poids et l'esthétique à l'autonomie</li>"+
						"<li>1,4 kg (~1,5 kg de moins qu'une batterie standard de 469 Wh)"+
						  "<ul>"+
						    "<li>250 Wh</li>"+
						    "<li>Les gains de poids cumulés permettent de garder une bicyclette maniable et offrant une grande cyclabilité."+
						  "</ul>"+
					  	"</li>"+
												
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="batterieMoins()" role="button">Réduire</a>'+ 
					"</div>";
}
function batteriePlus2(){
	var txt = document.getElementById("textBatterie2");
	txt.innerHTML = "<ul>"+
						"<li>Les cellules qui composent les batteries sont toutes fabriquées en Asie mais leur assemblage peut-être réalisé en Europe.</li>"+
						"<li>Pour nos VAE urbains, nous privilégions le poids et la bonne intégration au style de vélo</li>"+
						"<li>Nous avons opté pour une batterie"+
						  "<ul>"+
						    '<li>de forme "bidon'+ "d'eau" + "</li>"+
						    "<li>aux dimensions réduites (H = 280 mm et D = 80 mm)</li>"+
						     "<li> au poids de mobilité inférieur aux batteries de grande capacité qui équipent la plupart des VAE neufs (1,4 kg) => le vélo reste maniable.</li>"+
						  "</ul>"+
					  	"</li>"+
												
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="batterieMoins2()" role="button">Réduire</a>'+ 
					"</div>";
}
function batterieMoins(){
	var txt = document.getElementById("textBatterie");
	txt.innerHTML = "<ul>"+						
						"<li>Discrète</li>"+
						"<li>Légère</li>"+
						"<li>Amovible</li>"+						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="batteriePlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}
function batterieMoins2(){
	var txt = document.getElementById("textBatterie2");
	txt.innerHTML = "<ul>"+
						"<li>Format bidon d'eau <br> (H = 280 mm et diamètre = 80 mm)</li>"+
						"<li>1,4 kg</li>"+
						"<li>250 Wh</li>"+
						"<li>25 à 40 km d'autonomie selon les conditions d'utilisation (charge en kg, niveau d'assistance choisi, dénivelé...)</li>"+						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="batteriePlus2()" role="button">En savoir plus</a>'+ 
					"</div>";
}

function cadrePlus(){
	var txt = document.getElementById("textCadre");
	txt.innerHTML = 	"Le cadre et la fourche définissent l'usage possible (route, chemin, ville) et le style. Ils se caractérisent par leur géométrie et leur matériau <br><br>"+						 						    
					    "Les vélos de ville fabriqués en France dans les années 60 à 80"+
					"<ul>"+	  
						"<li> Offrent un grand confort par leur élasticité supérieure à celle des cadres aluminium.</li>"+
						"<li>Sont très robuste : l'acier marque moins que l'aluminium en cas de choc. </li>"+				  
					    "<li>Permettent des sections plus fines et des soudures très discrètes qui confèrent à la bicyclette toute son élégance.</li>"+						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="cadreMoins()" role="button">Réduire</a>'+
					"</div>";
}

function cadreMoins(){
	var txt = document.getElementById("textCadre");
	txt.innerHTML = "<ul>"+
						"<li>Confortable</li>"+
						"<li>Robuste</li>"+
						"<li>Elégant</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="cadrePlus()" role="button">En savoir plus</a> '+
					"</div>";
}

function selleriePlus(){
	var txt = document.getElementById("textSellerie");
	txt.innerHTML = "<div>"+
					  "Le choix de la sellerie est un équilibre entre confort, style et coût. <br><br>"+
					  "Une sellerie vinyle d'origine (selle rembourrée, poignées plastique) offre un confort immédiat et conserve au vélo son caractère d'origine. <br><br>"+
					  "Une sellerie cuir, plus coûteuse, plus dure au départ, doit être"+ ' "faite à la morphologie du cycliste"'+ "mais renforce le côté rétro et peut être harmonisée avec divers éléments (selle, sacoche de selle, ruban de poignées, sangle batterie...)."+ 
					  
					"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="sellerieMoins()" role="button">Réduire</a>'+ 
					"</div>";					
}

function selleriePlus2(){
	var txt = document.getElementById("textSellerie2");
	txt.innerHTML = "<div>"+
					  "Le choix de la sellerie est un équilibre entre confort, style et coût. <br><br>"+
					  "La sellerie d'origine (selle vinyle rembourrée, poignées en plastique) offrent un confort immédiat et conserve au vélo son caractère d'origine. <br><br>"+
					  "Une sellerie cuir, plus coûteuse"+ 
					  "<ul>"+
					    "<li>est plus dure au départ et doit être"+' "faite à la morphologie du cycliste"'+ "(il faut accepter de souffrir un peu au début pour l'assouplir...) </li>"+
					    "<li>renforce le caractère vintage et permet une harmonie avec les différents éléments de fixation divers (selle, sacoche de selle, ruban de poignées, sangle batterie...)</li>"+
					  "</ul>"+
					"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="sellerieMoins2()" role="button">Réduire</a>'+ 
					"</div>";					
}
function sellerieMoins(){
	var txt = document.getElementById("textSellerie");
	txt.innerHTML = "La sellerie inclut la selle, la sacoche de selle, les poignées, les sangles… <br><br>"+
						"Au choix"+			 						
						"<ul>"+
							"<li>Sellerie originale en vinyle : économique et immédiatement confortable</li>"+
							"<li>Sellerie en cuir : pour renforcer le caractère vintage du vélo"+												
						"</ul>"+
						'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
								'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
					  		'<a class="btn btn-primary" onclick="selleriePlus()" role="button">En savoir plus</a>'+
						"</div>";

}
function sellerieMoins2(){
	var txt = document.getElementById("textSellerie2");
	txt.innerHTML = "Au choix"+			 						
						"<ul>"+
							"<li>ORIGINALE : confortable et économique</li>"+
							"<li>CUIR : pour renforcer le caractère vintage du célo en y assortissant</li>"+
							"<ul>"+
								"<li>Sacoche de sekke</li>"+
								"<li>Ruban de poignées</li>"+
								"<li>Sangle batterie</li>"+
							"</ul>"+					
						"</ul>"+
						'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
								'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
					  		'<a class="btn btn-primary" onclick="selleriePlus2()" role="button">En savoir plus</a>'+
						"</div>";

}

function pedalierPlus(){
	var txt = document.getElementById("textPedalier");
	txt.innerHTML ="Nous avons opté pour des pédaliers à plateau unique qui vont de paire avec le moyeu à vitesses intégrées et permettent de garder la chaîne toujours en ligne."+
					 "<ul>"+
						"<li>Le pédalier d'origine est léger et élégant</li>"+
						"<li>Pédalier performance permet une meilleure transmission de votre effort à la roue. Il permet un décalage des manivelles qui augmente le rendement de 10%. C'est une innovation française et il est fabriqué en France </li>"+						
					"</ul>"+
					"Cette approche d'amélioration mécanique rejoint notre vision de l'assistance électrique"+ '"légère"'+ "qui vient vous apporter l'aide juste nécessaire."+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="pedalierMoins()" role="button">Réduire</a>'+ 
					"</div>";
}

function pedalierMoins(){
	var txt = document.getElementById("textPedalier");
	txt.innerHTML = "Le pédalier le plateau (unique) et les manivelles <br><br>"+
									"Au choix :"+
					"<ul>"+
						"<li>Pédalier d'origine : léger et élégant</li>"+
						"<li>Pédalier performance : offrant un rendement supérieur de 10%</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="pedalierPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}


function rouePlus(){
	var txt = document.getElementById("textRoues");
	txt.innerHTML = "Nous avons choisi de n'importer que le moteur et le moyeu à vitesses intégrées pour réaliser le rayonnage (assemblage jante / rayons / moyeu) en France. Cela permet"+
					"<ul>"+
						"<li> de sécuriser le vélo avec des jantes doubles parois (robustes) en aluminium (freinage renforcé / acier)</li>"+
						"<li>d'utiliser des composants fabriqués en France (jantes et rayons)</li>"+
						"<li>d'harmoniser les deux roues avant et arrière</li>"+
						"<li>de vous laisser le choix de l'esthétiques qui vous plait : jantes, rayons, moyeux chromés ou noir satin</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="roueMoins()" role="button">Réduire</a> '+
					"</div>";
}

function rouePlus2(){
	var txt = document.getElementById("textRoues2");
	txt.innerHTML = "<h5>ESTHETIQUE</h5>"+
					"<div>Sur le plan esthétique, les deux roues sont identiques. <br>"+
					"Vous pouvez choisir entre Chrome et noir satiné. <br><br>"+
					"</div>"+
					"<h5>FABRIQUEES EN FRANCE</h5>"+
					"<div>Les jantes et les rayons sont fabriqués en France (MACH1). <br>"+
					"Le rayonnage est effectué par un artisan en France.<br><br>"+
					"</div>"+
					"<h5>MEILLEUR FREINAGE</h5>"+
					"<div>Les jantes sont double parois pour plus de robustesse.<br><br></div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="roueMoins2()" role="button">Réduire</a> '+
					"</div>";
}

function roueMoins(){
	var txt = document.getElementById("textRoues");
	txt.innerHTML = 			 						
					"<ul>"+
						"<li>Robustes</li>"+
						"<li>Elégantes</li>"+
						"<li>Fabriquées en France</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+					  	
				  		'<a class="btn btn-primary" onclick="rouePlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}

function roueMoins2(){
	var txt = document.getElementById("textRoues2");
	txt.innerHTML = "Au choix"+			 						
					"<ul>"+
						"<li>Roues de 28 pouces double parois en aluminium</li>"+
						"<li>Robustesse et freinage sur jante optimisé</li>"+
						"<li>Fabriquées en France</li>"+
						"<li>Nombreuses configurations esthétiques : jantes, rayons, moyeu (moteur et moyeu à vitesses) chromés ou noir</li>"+					
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+					  	
				  		'<a class="btn btn-primary" onclick="rouePlus2()" role="button">En savoir plus</a>'+ 
					"</div>";
}

function equipementPlus(){
	var txt = document.getElementById("textEquipement");
	txt.innerHTML = "Les équipements suivants complètent le vélo"+
					"<ul>"+
						"<li>L'afficheur LCD noir monochrome offre 5 niveaux d'assistance</li>"+
						"<li>Le capteur détecte le mouvement de pédalier au quart de tour</li>"+
						"<li>Le contrôleur peut être dissimulé aisément dans une sacoche et le câblage est regroupé dans un faisceau unique</li>"+
						"<li>les phares à LED préservent le look vintage (bombé à l'avant)</li>"+
					"</ul>"+
					"Vous pouvez également accessoiriser votre bicyclette avec des sacoches de transport, des rétroviseurs, etc…"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick = "equipementMoins()" role="button">Réduire</a> '+
					"</div>";
}

function equipementMoins(){
	var txt = document.getElementById("textEquipement");
	txt.innerHTML = "<ul>"+
						"<li>Equipements électriques discrets et adaptés à l'usage en ville</li>"+
						"<li>Accessoires élégants (sacoches, phare bombé…)</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+
							'<div class="mx-auto"><a href="#composantsUtilises"><i class="bi bi-arrow-up"></i></a></div>	'+						  	
				  		'<a class="btn btn-primary" onclick="equipementPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}