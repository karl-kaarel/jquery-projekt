$(document).ready(function(){
    $(function() {
        // kui vajutatakse enter formide suhtes, siis leht ei refresh-i
        $("form").submit(function() { return false; });
    });

    var objektid = [];
    var liikumine = [];
    $("#sisestus").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            //alert('You pressed a "enter" key in textbox');

            // salvestab vastuse
            var vastus=document.getElementById("sisestus").value;
            //console.log(vastus);

            switch (vastus){
                // kui läheb idapoolse seina juurde
                case "liigu sein ida":
                    if (objektid.includes("kruvikeeraja")){
                        $('.sisu').append("<p><b>Cell</b></p>");
                        $('.sisu').append("<p>Siin pole enam midagi leida</p>");
                        break;
                    }
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p>Seina juures on pime, aga siin võib midagi olla</p>");
                    liikumine.splice(0,1,"ida");
                    console.log(liikumine);
                    break;
                //kui vaatab idapoolset seina
                case "vaata sein ida":
                    if (liikumine == "ida"){
                        //kui array listis ei ole kruvikeeraja str elementi
                        if (!objektid.includes("kruvikeeraja")){
                            $('.sisu').append("<p><b>Cell</b></p>");
                            $('.sisu').append("<p>Kuigi on pime ja pole hästi näha, märkad sa kasti, kust leidsid <b>kruvikeeraja</b></p>");
                            objektid.push("kruvikeeraja");
                            $('.item1').append("<p class='btn'>kruvikeeraja</p>");
                            console.log(objektid);

                            break;
                        }
                    }
                    if (objektid.includes("kruvikeeraja")){
                        $('.sisu').append("<p><b>Cell</b></p>");
                        $('.sisu').append("<p>Siin pole enam midagi leida</p>");
                        break;
                    }
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p>Sa ei nae hasti, idapoolne sein on liiga kaugel</p>");
                    break;
                
                //liigu louna sein
                case "liigu sein louna":
                    if (objektid.includes("kirves")){
                        $('.sisu').append("<p><b>Cell</b></p>");
                        $('.sisu').append("<p>Siin pole enam midagi leida</p>");
                        break;
                    }
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p>Seina juures on väike tuli, midagi on seina küljes</p>");
                    liikumine.splice(0,1,"louna");
                    console.log(liikumine);
                    break;
                // vaata louna sein
                case "vaata sein louna":
                    if (liikumine == "louna"){
                        //kui array listis ei ole kirves str elementi
                        if (!objektid.includes("kirves")){
                            $('.sisu').append("<p><b>Cell</b></p>");
                            $('.sisu').append("<p>Lähedamalt uurides leiad, seina küljes on ventilatsiooni võlli ava, mis on 4 kruviga kinni. Siin pole midagi hetkel teha");
                            
                            if (objektid.includes("kruvikeeraja")){
                                $('.sisu').append("<p>Sa kasutasid <b>kruvikeerajat</b>, et ventilatsiooni võlli ava lahti saada ja leidsid <b>kirve</b></p>");
                                objektid.push("kirves");
                                $('.item1').append("<p class='btn'>kirves</p>");
                                console.log(objektid);
                            }
                            
                            break;
                        }
                    }
                    if (objektid.includes("kirves")){
                        $('.sisu').append("<p><b>Cell</b></p>");
                        $('.sisu').append("<p>Siin pole enam midagi leida</p>");
                        break;
                    }
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p>Sa ei nae hasti, lounapoolne sein on liiga kaugel</p>");
                    break;
                
                // liigu laane uks
                case "liigu uks laane":
                    if (objektid.includes("voti")){
                        $('.sisu').append("<p><b>Cell</b></p>");
                        $('.sisu').append("<p>Siin pole enam midagi leida</p>");
                        break;
                    }
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p>Enda ees näed ukse kujutist</p>");
                    liikumine.splice(0,1,"laane");
                    console.log(liikumine);
                    break;
                //vaata laane uks
                case "vaata uks laane":
                    if (liikumine == "laane"){
                        //kui array listis ei ole kirves str elementi
                        if (!objektid.includes("voti")){
                            $('.sisu').append("<p><b>Cell</b></p>");
                            $('.sisu').append("<p>Ust uurides leiad, et see on puidust. Ust lükates, ega tõmmates ei juhtu midagi<p>");
                            
                            if (objektid.includes("kirves")){
                                $('.sisu').append("<p>Sa kasutasid <b>kirve</b> ukse peal ja suutsid teha väikse ava, millest sisse ronida. puidust ukse taga olevas ruumis leidsid <b>võtme</b> </p>");
                                objektid.push("voti");
                                $('.item1').append("<p class='btn'>võti</p>");
                                console.log(objektid);
                            }
                            
                            break;
                        }
                    }
                    if (objektid.includes("voti")){
                        $('.sisu').append("<p><b>Cell</b></p>");
                        $('.sisu').append("<p>Siin pole enam midagi leida</p>");
                        break;
                    }
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p>Laane poolne uks on kaugel</p>");
                    break;
                
                //
                //liigu uks pohi
                case "liigu uks pohi":
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p>Enda ees näed ukse kujutist</p>");
                    liikumine.splice(0,1,"pohi");
                    console.log(liikumine);
                    break;
                //vaata uks pohi
                case "vaata uks pohi":
                    if (liikumine == "pohi"){
                        //kui array listis ei ole kirves str elementi
                        if (!objektid.includes("voti")){
                            $('.sisu').append("<p><b>Cell</b></p>");
                            $('.sisu').append("<p>Ust uurides leiad, et see on metallist ja tunned, et selle tagant tuleb külma õhku ning on kuulda õrna tuult. Sammuti on uksel lukk<p><p>");
                            
                            break;
                        }
                        //lõpp
                        if (objektid.includes("voti")){
                            $('.sisu').append("<p>Kasutasid <b>võtit</b> ja avasid ukse</p>");
                            console.log(objektid);
                            window.location.href = "lopp.html"
                            break;
                        }   
                    }
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p>põhja poolne uks on kaugel</p>");
                    break;
                case "lp":
                    window.location.href = "lopp.html"
                    break;

                //kui sisestus on vale
                default:
                    $('.sisu').append("<p><b>Cell</b></p>");
                    $('.sisu').append("<p><i>Sa ei näe midagi ja ei tea mida teha</i></p>");
            }
            //automaatselt liigutab lehe vaate textbox'i juurde
            document.getElementById('sisestus').scrollIntoView();
            // teeb teksti kasti tühjaks
            $("#sisestus").val("");
        };
    });
});