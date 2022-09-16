let fradio = document.getElementsByName("from");
let tradio = document.getElementsByName("to");
let category = document.getElementsByName("category");
let funit = document.getElementById('one');
let tunit = document.getElementById('two');
let reverse = document.getElementById('reverse');
let none = document.getElementById('none');
let delet = document.getElementById('delete');

function ucategory(call){
    let id = call.id;
    none.style.opacity = 1;
    if(id == "Weight"){
        let funits = `
            <label id="flabel">Milligram</label><br>
            <input type="number" id="vfrom" onkeyup="check()" maxlength="10" value="0">
            <div>
                From:
            </div>
            <div class="units" id="funit">
                <div>
                    <input type="radio" name="from" onclick="check()" value="Milligram" checked>
                    <label for="Milligram">Milligram</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Microgram">
                    <label for="Microgram">Microgram</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Gram">
                    <label for="Gram">Gram</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Kilogram">
                    <label for="Kilogram">Kilogram</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Pound">
                    <label for="Pound">Pound</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Ounce">
                    <label for="Ounce">Ounce</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Grain">
                    <label for="Grain">Grain</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Stone">
                    <label for="Stone">Stone</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Ton">
                    <label for="Ton">Ton</label><br>
                </div>
            </div>
        `;
        funit.innerHTML = funits;
        let tunits = `
        <label id="tlabel">Milligram</label><br>
            <input type="text" readonly id="vto">
            <div>
                To:
            </div>
            <div class="units" id="tunit">
                <div>
                    <input type="radio" name="to" onclick="check()" value="Milligram" checked>
                    <label for="Milligram">Milligram</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Microgram">
                    <label for="Microgram">Microgram</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Gram">
                    <label for="Gram">Gram</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Kilogram">
                    <label for="Kilogram">Kilogram</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Pound">
                    <label for="Pound">Pound</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Ounce">
                    <label for="Ounce">Ounce</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Grain">
                    <label for="Grain">Grain</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Stone">
                    <label for="Stone">Stone</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Ton">
                    <label for="Ton">Ton</label><br>
                </div>
            </div>
        `;
        tunit.innerHTML = tunits;
    }else if(id == "Distance"){
        let funits = `
        <label id="flabel">Millimetre</label><br>
            <input type="number" id="vfrom" onkeyup="check()" maxlength="10" value="0">
            <div>
                From:
            </div>
            <div class="units" id="funit">
                <div>
                    <input type="radio" name="from" onclick="check()" value="Millimetre" checked>
                    <label for="Millimetre">Millimetre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Micrometre">
                    <label for="Micrometre">Micrometre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Decimetre">
                    <label for="Decimetre">Decimetre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Centimetre">
                    <label for="Centimetre">Centimetre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Metre">
                    <label for="Metre">Metre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Kilometre">
                    <label for="Kilometre">Kilometre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Miles">
                    <label for="Miles">Miles</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Yard">
                    <label for="Yard">Yard</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Feet">
                    <label for="Feet">Feet</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Inch">
                    <label for="Inch">Inch</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Furlong">
                    <label for="Furlong">Furlong</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Light Year">
                    <label for="Light Year">Light Year</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Storey">
                    <label for="Storey">Storey</label><br>
                </div>
            </div>
        `;
        funit.innerHTML = funits;
        let tunits = `
            <label id="tlabel">Millimetre</label><br>
            <input type="text" readonly id="vto">
            <div>
                To:
            </div>
            <div class="units" id="tunit">
                <div>
                    <input type="radio" name="to" onclick="check()" value="Millimetre" checked>
                    <label for="Millimetre">Millimetre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Micrometre">
                    <label for="Micrometre">Micrometre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Decimetre">
                    <label for="Decimetre">Decimetre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Centimetre">
                    <label for="Centimetre">Centimetre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Metre">
                    <label for="Metre">Metre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Kilometre">
                    <label for="Kilometre">Kilometre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Miles">
                    <label for="Miles">Miles</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Yard">
                    <label for="Yard">Yard</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Feet">
                    <label for="Feet">Feet</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Inch">
                    <label for="Inch">Inch</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Furlong">
                    <label for="Furlong">Furlong</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Light Year">
                    <label for="Light Year">Light Year</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Storey">
                    <label for="Storey">Storey</label><br>
                </div>
            </div>
        `;
        tunit.innerHTML = tunits;
    }else if(id == "Volume"){
        let funits = `
            <label id="flabel">Teaspoon</label><br>
            <input type="number" id="vfrom" onkeyup="check()" maxlength="10" value="0">
            <div>
                From:
            </div>
            <div class="units" id="funit">
                <div>
                    <input type="radio" name="from" onclick="check()" value="Teaspoon" checked>
                    <label for="Teaspoon">Teaspoon</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Tablespoon">
                    <label for="Tablespoon">Tablespoon</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Cup">
                    <label for="Cup">Cup</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Fluid Ounce">
                    <label for="Fluid Ounce">Fluid Ounce</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Pint">
                    <label for="Pint">Pint</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Quart">
                    <label for="Quart">Quart</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Gallon">
                    <label for="Gallon">Gallon</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Barrel">
                    <label for="Barrel">Barrel</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Oil Barrel">
                    <label for="Oil Barrel">Oil Barrel</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Mililitre">
                    <label for="Mililitre">Mililitre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Litre">
                    <label for="Litre">Litre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Cubic cm">
                    <label for="Cubic cm">Cubic cm</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Cubic Metre">
                    <label for="Cubic Metre">Cubic Metre</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Cubic Inch">
                    <label for="Cubic Inch">Cubic Inch</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Cubic Foot">
                    <label for="Cubic Foot">Cubic Foot</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Cubic Yard">
                    <label for="Cubic Yard">Cubic Yard</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Drop">
                    <label for="Drop">Drop</label><br>
                </div>
            </div>
        `;
        funit.innerHTML = funits;
        let tunits = `
            <label id="tlabel">Teaspoon</label><br>
            <input type="text" readonly id="vto">
            <div>
                To:
            </div>
            <div class="units" id="tunit">
                <div>
                    <input type="radio" name="to" onclick="check()" value="Teaspoon" checked>
                    <label for="Teaspoon">Teaspoon</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Tablespoon">
                    <label for="Tablespoon">Tablespoon</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Cup">
                    <label for="Cup">Cup</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Fluid Ounce">
                    <label for="Fluid Ounce">Fluid Ounce</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Pint">
                    <label for="Pint">Pint</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Quart">
                    <label for="Quart">Quart</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Gallon">
                    <label for="Gallon">Gallon</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Barrel">
                    <label for="Barrel">Barrel</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Oil Barrel">
                    <label for="Oil Barrel">Oil Barrel</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Mililitre">
                    <label for="Mililitre">Mililitre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Litre">
                    <label for="Litre">Litre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Cubic cm">
                    <label for="Cubic cm">Cubic cm</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Cubic Metre">
                    <label for="Cubic Metre">Cubic Metre</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Cubic Inch">
                    <label for="Cubic Inch">Cubic Inch</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Cubic Foot">
                    <label for="Cubic Foot">Cubic Foot</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Cubic Yard">
                    <label for="Cubic Yard">Cubic Yard</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Drop">
                    <label for="Drop">Drop</label><br>
                </div>
            </div>
        `;
        tunit.innerHTML = tunits;
    }else if(id == "Temperature"){
        let funits = `
            <label id="flabel">Celsius</label><br>
            <input type="number" id="vfrom" onkeyup="check()" maxlength="10" value="0">
            <div>
                From:
            </div>
            <div class="units" id="funit">
                <div>
                    <input type="radio" name="from" onclick="check()" value="Celsius" checked>
                    <label for="Celsius">Celsius</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Fahrenheit">
                    <label for="Fahrenheit">Fahrenheit</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Kelvin">
                    <label for="Kelvin">Kelvin</label><br>
                </div>
            </div>
        `;
        funit.innerHTML = funits;
        let tunits = `
            <label id="tlabel">Celsius</label><br>
            <input type="text" readonly id="vto">
            <div>
                To:
            </div>
            <div class="units" id="tunit">
                <div>
                    <input type="radio" name="to" onclick="check()" value="Celsius" checked>
                    <label for="Celsius">Celsius</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Fahrenheit">
                    <label for="Fahrenheit">Fahrenheit</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Kelvin">
                    <label for="Kelvin">Kelvin</label><br>
                </div>
            </div>
        `;
        tunit.innerHTML = tunits;
    }else if(id == "Time"){
        let funits = `
            <label id="flabel">Nanosecond</label><br>
            <input type="number" id="vfrom" onkeyup="check()" maxlength="10" value="0">
            <div>
                From:
            </div>
            <div class="units" id="funit">
                <div>
                    <input type="radio" name="from" onclick="check()" value="Nanosecond" checked>
                    <label for="Nanosecond">Nanosecond</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Millisecond">
                    <label for="Millisecond">Millisecond</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Second">
                    <label for="Second">Second</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Minute">
                    <label for="Minute">Minute</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Hour">
                    <label for="Hour">Hour</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Day">
                    <label for="Day">Day</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Week">
                    <label for="Week">Week</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Month">
                    <label for="Month">Month</label><br>
                </div>
                <div>
                    <input type="radio" name="from" onclick="check()" value="Year">
                    <label for="Year">Year</label><br>
                </div>
            </div>
        `;
        funit.innerHTML = funits;
        let tunits = `
            <label id="tlabel">Nanosecond</label><br>
            <input type="text" readonly id="vto">
            <div>
                To:
            </div>
            <div class="units" id="tunit">
                <div>
                    <input type="radio" name="to" onclick="check()" value="Nanosecond" checked>
                    <label for="Nanosecond">Nanosecond</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Millisecond">
                    <label for="Millisecond">Millisecond</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Second">
                    <label for="Second">Second</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Minute">
                    <label for="Minute">Minute</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Hour">
                    <label for="Hour">Hour</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Day">
                    <label for="Day">Day</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Week">
                    <label for="Week">Week</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Month">
                    <label for="Month">Month</label><br>
                </div>
                <div>
                    <input type="radio" name="to" onclick="check()" value="Year">
                    <label for="Year">Year</label><br>
                </div>
            </div>
        `;
        tunit.innerHTML = tunits;
    };
}
function check(){
    let vfrom = document.getElementById('vfrom');
    let vto = document.getElementById('vto');
    let flabel = document.getElementById('flabel');
    let tlabel = document.getElementById('tlabel');
    let input = vfrom.value;
    let l = fradio.length;
    fromv = "";
    tov = "";
    for(i = 0; i < l; i++){
        if(fradio[i].checked){
            fromv = fradio[i].value;
            break;
        }
    }
    for(i = 0; i < l; i++){
        if(tradio[i].checked){
            tov = tradio[i].value;
            break;
        }
    }
    flabel.innerText = fromv;
    tlabel.innerText = tov;
    if(fromv == "Milligram"){
        if(tov == "Milligram"){
            vto.value = input;
        }else if(tov == "Microgram"){
            vto.value = input * 1000;
        }else if(tov == "Gram"){
            vto.value = input / 1000;
        }else if(tov == "Kilogram"){
            vto.value = input / 1000000;
        }else if(tov == "Pound"){
            vto.value = input / 453592.37;
        }else if(tov == "Ounce"){
            vto.value = input / 28349.523125;
        }else if(tov == "Grain"){
            vto.value = input / 64.79891;
        }else if(tov == "Stone"){
            vto.value = input / 6350293.18;
        }else if(tov == "Ton"){
            vto.value = input / 1000000000;
        }
    }else if(fromv == "Microgram"){
        if(tov == "Milligram"){
            vto.value = input / 1000;
        }else if(tov == "Microgram"){
            vto.value = input;
        }else if(tov == "Gram"){
            vto.value = input / 1000000;
        }else if(tov == "Kilogram"){
            vto.value = input / 1000000000;
        }else if(tov == "Pound"){
            vto.value = input / 453592370;
        }else if(tov == "Ounce"){
            vto.value = input / 28349523.125;
        }else if(tov == "Grain"){
            vto.value = input / 64798.91;
        }else if(tov == "Stone"){
            vto.value = input / 6350293180;
        }else if(tov == "Ton"){
            vto.value = input / 1000000000000;
        }
    }else if(fromv == "Gram"){
        if(tov == "Milligram"){
            vto.value = input * 1000;
        }else if(tov == "Microgram"){
            vto.value = input * 1000000;
        }else if(tov == "Gram"){
            vto.value = input;
        }else if(tov == "Kilogram"){
            vto.value = input / 1000;
        }else if(tov == "Pound"){
            vto.value = input / 453.592370;
        }else if(tov == "Ounce"){
            vto.value = input / 28.349523125;
        }else if(tov == "Grain"){
            vto.value = input / 0.06479891;
        }else if(tov == "Stone"){
            vto.value = input / 6350.293180;
        }else if(tov == "Ton"){
            vto.value = input / 1000000;
        }
    }else if(fromv == "Kilogram"){
        if(tov == "Milligram"){
            vto.value = input * 1000000;
        }else if(tov == "Microgram"){
            vto.value = input * 1000000000;
        }else if(tov == "Gram"){
            vto.value = input * 1000;
        }else if(tov == "Kilogram"){
            vto.value = input;
        }else if(tov == "Pound"){
            vto.value = input / 0.453592370;
        }else if(tov == "Ounce"){
            vto.value = input / 0.028349523125;
        }else if(tov == "Grain"){
            vto.value = input / 0.00006479891;
        }else if(tov == "Stone"){
            vto.value = input / 6.350293180;
        }else if(tov == "Ton"){
            vto.value = input / 1000;
        }
    }else if(fromv == "Pound"){
        if(tov == "Milligram"){
            vto.value = input * 453592.370;
        }else if(tov == "Microgram"){
            vto.value = input * 453592370;
        }else if(tov == "Gram"){
            vto.value = input * 453.592370;
        }else if(tov == "Kilogram"){
            vto.value = input * 0.453592370;
        }else if(tov == "Pound"){
            vto.value = input;
        }else if(tov == "Ounce"){
            vto.value = input * 16;
        }else if(tov == "Grain"){
            vto.value = input * 7000;
        }else if(tov == "Stone"){
            vto.value = input / 14;
        }else if(tov == "Ton"){
            vto.value = input / 2204.6226;
        }
    }else if(fromv == "Ounce"){
        if(tov == "Milligram"){
            vto.value = input * 28349.523125;
        }else if(tov == "Microgram"){
            vto.value = input * 28349523.125;
        }else if(tov == "Gram"){
            vto.value = input * 28.349523125;
        }else if(tov == "Kilogram"){
            vto.value = input * 0.028349523125;
        }else if(tov == "Pound"){
            vto.value = input * 0.625;
        }else if(tov == "Ounce"){
            vto.value = input;
        }else if(tov == "Grain"){
            vto.value = input * 437.5;
        }else if(tov == "Stone"){
            vto.value = input / 224;
        }else if(tov == "Ton"){
            vto.value = input / 35273.9619;
        }
    }else if(fromv == "Grain"){
        if(tov == "Milligram"){
            vto.value = input * 64.79891;
        }else if(tov == "Microgram"){
            vto.value = input * 64798.91;
        }else if(tov == "Gram"){
            vto.value = input * 0.06479891;
        }else if(tov == "Kilogram"){
            vto.value = input * 0.00006479891;
        }else if(tov == "Pound"){
            vto.value = input / 7000;
        }else if(tov == "Ounce"){
            vto.value = input / 437.5;
        }else if(tov == "Grain"){
            vto.value = input;
        }else if(tov == "Stone"){
            vto.value = input / 98000;
        }else if(tov == "Ton"){
            vto.value = input / 15432358.3529;
        }
    }else if(fromv == "Stone"){
        if(tov == "Milligram"){
            vto.value = input * 6350293.180;
        }else if(tov == "Microgram"){
            vto.value = input * 6350293180;
        }else if(tov == "Gram"){
            vto.value = input * 6350.293180;
        }else if(tov == "Kilogram"){
            vto.value = input * 6.350293180;
        }else if(tov == "Pound"){
            vto.value = input * 14;
        }else if(tov == "Ounce"){
            vto.value = input * 224;
        }else if(tov == "Grain"){
            vto.value = input * 98000;
        }else if(tov == "Stone"){
            vto.value = input;
        }else if(tov == "Ton"){
            vto.value = input / 157.473;
        }
    }else if(fromv == "Ton"){
        if(tov == "Milligram"){
            vto.value = input * 1000000000;
        }else if(tov == "Microgram"){
            vto.value = input * 1000000000000;
        }else if(tov == "Gram"){
            vto.value = input * 1000000;
        }else if(tov == "Kilogram"){
            vto.value = input * 1000;
        }else if(tov == "Pound"){
            vto.value = input * 2204.6226;
        }else if(tov == "Ounce"){
            vto.value = input * 35273.9619;
        }else if(tov == "Grain"){
            vto.value = input * 15432358.3529;
        }else if(tov == "Stone"){
            vto.value = input * 157.473;
        }else if(tov == "Ton"){
            vto.value = input;
        }
    };
    if(fromv == "Millimetre"){
        if(tov == "Millimetre"){
            vto.value = input;
        }else if(tov == "Micrometre"){
            vto.value = input * 1000;
        }else if(tov == "Decimetre"){
            vto.value = input / 100;
        }else if(tov == "Centimetre"){
            vto.value = input / 10;
        }else if(tov == "Metre"){
            vto.value = input / 1000;
        }else if(tov == "Kilometre"){
            vto.value = input / 1000000;
        }else if(tov == "Miles"){
            vto.value = input / 1609344;
        }else if(tov == "Yard"){
            vto.value = input / 914.4;
        }else if(tov == "Feet"){
            vto.value = input / 304.8;
        }else if(tov == "Inch"){
            vto.value = input / 25.4;
        }else if(tov == "Furlong"){
            vto.value = input / 201168;
        }else if(tov == "Light Year"){
            vto.value = input / 9460730472580800000;
        }else if(tov == "Storey"){
            vto.value = input / 3300;
        }
    }else if(fromv == "Micrometre"){
        if(tov == "Millimetre"){
            vto.value = input / 1000;
        }else if(tov == "Micrometre"){
            vto.value = input;
        }else if(tov == "Decimetre"){
            vto.value = input / 100000;
        }else if(tov == "Centimetre"){
            vto.value = input / 10000;
        }else if(tov == "Metre"){
            vto.value = input / 1000000;
        }else if(tov == "Kilometre"){
            vto.value = input / 1000000000;
        }else if(tov == "Miles"){
            vto.value = input / 1609344000;
        }else if(tov == "Yard"){
            vto.value = input / 914400;
        }else if(tov == "Feet"){
            vto.value = input / 304800;
        }else if(tov == "Inch"){
            vto.value = input / 25400;
        }else if(tov == "Furlong"){
            vto.value = input / 201168000;
        }else if(tov == "Light Year"){
            vto.value = input / 9460730472580800000000;
        }else if(tov == "Storey"){
            vto.value = input / 3300000;
        }
    }else if(fromv == "Decimetre"){
        if(tov == "Millimetre"){
            vto.value = input * 100;
        }else if(tov == "Micrometre"){
            vto.value = input * 100000;
        }else if(tov == "Decimetre"){
            vto.value = input;
        }else if(tov == "Centimetre"){
            vto.value = input * 10;
        }else if(tov == "Metre"){
            vto.value = input / 10;
        }else if(tov == "Kilometre"){
            vto.value = input / 10000;
        }else if(tov == "Miles"){
            vto.value = input / 16093.44;
        }else if(tov == "Yard"){
            vto.value = input / 9.144;
        }else if(tov == "Feet"){
            vto.value = input / 3.048;
        }else if(tov == "Inch"){
            vto.value = input / 0.254;
        }else if(tov == "Furlong"){
            vto.value = input / 2011.68;
        }else if(tov == "Light Year"){
            vto.value = input / 94607304725808000;
        }else if(tov == "Storey"){
            vto.value = input / 33;
        }
    }else if(fromv == "Centimetre"){
        if(tov == "Millimetre"){
            vto.value = input * 10;
        }else if(tov == "Micrometre"){
            vto.value = input * 10000;
        }else if(tov == "Decimetre"){
            vto.value = input / 10;
        }else if(tov == "Centimetre"){
            vto.value = input;
        }else if(tov == "Metre"){
            vto.value = input / 100;
        }else if(tov == "Kilometre"){
            vto.value = input / 100000;
        }else if(tov == "Miles"){
            vto.value = input / 160934.4;
        }else if(tov == "Yard"){
            vto.value = input / 91.44;
        }else if(tov == "Feet"){
            vto.value = input / 30.48;
        }else if(tov == "Inch"){
            vto.value = input / 2.54;
        }else if(tov == "Furlong"){
            vto.value = input / 20116.8;
        }else if(tov == "Light Year"){
            vto.value = input / 946073047258080000;
        }else if(tov == "Storey"){
            vto.value = input / 330;
        }
    }else if(fromv == "Metre"){
        if(tov == "Millimetre"){
            vto.value = input * 1000;
        }else if(tov == "Micrometre"){
            vto.value = input * 1000000;
        }else if(tov == "Decimetre"){
            vto.value = input * 10;
        }else if(tov == "Centimetre"){
            vto.value = input * 100;
        }else if(tov == "Metre"){
            vto.value = input;
        }else if(tov == "Kilometre"){
            vto.value = input / 1000;
        }else if(tov == "Miles"){
            vto.value = input / 1609.344;
        }else if(tov == "Yard"){
            vto.value = input / 0.9144;
        }else if(tov == "Feet"){
            vto.value = input / 0.3048;
        }else if(tov == "Inch"){
            vto.value = input / 0.0254;
        }else if(tov == "Furlong"){
            vto.value = input / 201.168;
        }else if(tov == "Light Year"){
            vto.value = input / 9460730472580800;
        }else if(tov == "Storey"){
            vto.value = input / 3.30;
        }
    }else if(fromv == "Kilometre"){
        if(tov == "Millimetre"){
            vto.value = input * 1000000;
        }else if(tov == "Micrometre"){
            vto.value = input * 1000000000;
        }else if(tov == "Decimetre"){
            vto.value = input * 10000;
        }else if(tov == "Centimetre"){
            vto.value = input * 100000;
        }else if(tov == "Metre"){
            vto.value = input * 1000;
        }else if(tov == "Kilometre"){
            vto.value = input;
        }else if(tov == "Miles"){
            vto.value = input / 1.609344;
        }else if(tov == "Yard"){
            vto.value = input / 0.0009144;
        }else if(tov == "Feet"){
            vto.value = input / 0.0003048;
        }else if(tov == "Inch"){
            vto.value = input / 0.0000254;
        }else if(tov == "Furlong"){
            vto.value = input / 0.201168;
        }else if(tov == "Light Year"){
            vto.value = input / 9460730472580.8;
        }else if(tov == "Storey"){
            vto.value = input / 0.0033;
        }
    }else if(fromv == "Miles"){
        if(tov == "Millimetre"){
            vto.value = input * 1609344;
        }else if(tov == "Micrometre"){
            vto.value = input * 1609344000;
        }else if(tov == "Decimetre"){
            vto.value = input * 16093.44;
        }else if(tov == "Centimetre"){
            vto.value = input * 160934.4;
        }else if(tov == "Metre"){
            vto.value = input * 1609.344;
        }else if(tov == "Kilometre"){
            vto.value = input * 1.609344;
        }else if(tov == "Miles"){
            vto.value = input;
        }else if(tov == "Yard"){
            vto.value = input * 1760;
        }else if(tov == "Feet"){
            vto.value = input * 5280;
        }else if(tov == "Inch"){
            vto.value = input * 63360;
        }else if(tov == "Furlong"){
            vto.value = input * 8;
        }else if(tov == "Light Year"){
            vto.value = input / 5878625373183.607;
        }else if(tov == "Storey"){
            vto.value = input * 487.68;
        }
    }else if(fromv == "Yard"){
        if(tov == "Millimetre"){
            vto.value = input * 914.4;
        }else if(tov == "Micrometre"){
            vto.value = input * 914400;
        }else if(tov == "Decimetre"){
            vto.value = input * 9.144;
        }else if(tov == "Centimetre"){
            vto.value = input * 91.44;
        }else if(tov == "Metre"){
            vto.value = input * 0.9144;
        }else if(tov == "Kilometre"){
            vto.value = input * 0.0009144;
        }else if(tov == "Miles"){
            vto.value = input / 1760;
        }else if(tov == "Yard"){
            vto.value = input;
        }else if(tov == "Feet"){
            vto.value = input * 3;
        }else if(tov == "Inch"){
            vto.value = input * 36;
        }else if(tov == "Furlong"){
            vto.value = input / 220;
        }else if(tov == "Light Year"){
            vto.value = input / 10346380656803150;
        }else if(tov == "Storey"){
            vto.value = input * 0.2771;
        }
    }else if(fromv == "Feet"){
        if(tov == "Millimetre"){
            vto.value = input * 304.8;
        }else if(tov == "Micrometre"){
            vto.value = input * 304800;
        }else if(tov == "Decimetre"){
            vto.value = input * 3.048;
        }else if(tov == "Centimetre"){
            vto.value = input * 30.48;
        }else if(tov == "Metre"){
            vto.value = input * 0.3048;
        }else if(tov == "Kilometre"){
            vto.value = input * 0.0003048;
        }else if(tov == "Miles"){
            vto.value = input / 5280;
        }else if(tov == "Yard"){
            vto.value = input / 3;
        }else if(tov == "Feet"){
            vto.value = input;
        }else if(tov == "Inch"){
            vto.value = input * 12;
        }else if(tov == "Furlong"){
            vto.value = input / 660;
        }else if(tov == "Light Year"){
            vto.value = input / 31039141970409448;
        }else if(tov == "Storey"){
            vto.value = input * 0.0924;
        }
    }else if(fromv == "Inch"){
        if(tov == "Millimetre"){
            vto.value = input * 25.4;
        }else if(tov == "Micrometre"){
            vto.value = input * 25400;
        }else if(tov == "Decimetre"){
            vto.value = input * 0.254;
        }else if(tov == "Centimetre"){
            vto.value = input * 2.54;
        }else if(tov == "Metre"){
            vto.value = input * 0.0254;
        }else if(tov == "Kilometre"){
            vto.value = input * 0.0000254;
        }else if(tov == "Miles"){
            vto.value = input / 63360;
        }else if(tov == "Yard"){
            vto.value = input / 36;
        }else if(tov == "Feet"){
            vto.value = input / 12;
        }else if(tov == "Inch"){
            vto.value = input;
        }else if(tov == "Furlong"){
            vto.value = input / 7920;
        }else if(tov == "Light Year"){
            vto.value = input / 372469703644913410;
        }else if(tov == "Storey"){
            vto.value = input / 129.9213;
        }
    }else if(fromv == "Furlong"){
        if(tov == "Millimetre"){
            vto.value = input * 201168;
        }else if(tov == "Micrometre"){
            vto.value = input * 201168000;
        }else if(tov == "Decimetre"){
            vto.value = input * 2011.68;
        }else if(tov == "Centimetre"){
            vto.value = input * 20116.8;
        }else if(tov == "Metre"){
            vto.value = input * 201.168;
        }else if(tov == "Kilometre"){
            vto.value = input * 0.201168;
        }else if(tov == "Miles"){
            vto.value = input * 0.125;
        }else if(tov == "Yard"){
            vto.value = input * 220;
        }else if(tov == "Feet"){
            vto.value = input * 660;
        }else if(tov == "Inch"){
            vto.value = input * 7920;
        }else if(tov == "Furlong"){
            vto.value = input;
        }else if(tov == "Light Year"){
            vto.value = input / 47029002985481.43;
        }else if(tov == "Storey"){
            vto.value = input * 60.96;
        }
    }else if(fromv == "Light Year"){
        if(tov == "Millimetre"){
            vto.value = input * 9460730472580800000;
        }else if(tov == "Micrometre"){
            vto.value = input * 9460730472580800000000;
        }else if(tov == "Decimetre"){
            vto.value = input * 94607304725808000;
        }else if(tov == "Centimetre"){
            vto.value = input * 946073047258080000;
        }else if(tov == "Metre"){
            vto.value = input * 9460730472580800;
        }else if(tov == "Kilometre"){
            vto.value = input * 9460730472580.8;
        }else if(tov == "Miles"){
            vto.value = input * 5878625373183.607;
        }else if(tov == "Yard"){
            vto.value = input * 10346380656803150;
        }else if(tov == "Feet"){
            vto.value = input * 31039141970409448;
        }else if(tov == "Inch"){
            vto.value = input * 372469703644913410;
        }else if(tov == "Furlong"){
            vto.value = input * 47029002985481.43;
        }else if(tov == "Light Year"){
            vto.value = input;
        }else if(tov == "Storey"){
            vto.value = input * 2866888021994182;
        }
    }else if(fromv == "Storey"){
        if(tov == "Millimetre"){
            vto.value = input * 3300;
        }else if(tov == "Micrometre"){
            vto.value = input * 3300000;
        }else if(tov == "Decimetre"){
            vto.value = input * 33;
        }else if(tov == "Centimetre"){
            vto.value = input * 330;
        }else if(tov == "Metre"){
            vto.value = input * 3.3;
        }else if(tov == "Kilometre"){
            vto.value = input * 0.0033;
        }else if(tov == "Miles"){
            vto.value = input / 487.68;
        }else if(tov == "Yard"){
            vto.value = input * 3.6089;
        }else if(tov == "Feet"){
            vto.value = input * 10.8268;
        }else if(tov == "Inch"){
            vto.value = input * 129.9213;
        }else if(tov == "Furlong"){
            vto.value = input / 60.96;
        }else if(tov == "Light Year"){
            vto.value = input / 2866888021994182;
        }else if(tov == "Storey"){
            vto.value = input;
        }
    };
    if(fromv == "Teaspoon"){
        if(tov == "Teaspoon"){
            vto.value = input;
        }else if(tov == "Tablespoon"){
            vto.value = input / 3;
        }else if(tov == "Cup"){
            vto.value = input / 48;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 0.1735;
        }else if(tov == "Pint"){
            vto.value = input * 0.0087;
        }else if(tov == "Quart"){
            vto.value = input * 0.0043;
        }else if(tov == "Gallon"){
            vto.value = input * 0.0011;
        }else if(tov == "Barrel"){
            vto.value = input / 33203.8635;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 32256;
        }else if(tov == "Mililitre"){
            vto.value = input * 4.9289;
        }else if(tov == "Litre"){
            vto.value = input / 202.8841;
        }else if(tov == "Cubic cm"){
            vto.value = input * 4.9289;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 202884.1362;
        }else if(tov == "Cubic Inch"){
            vto.value = input / 3.3247;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 5745.039;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 155116.0542;
        }else if(tov == "Drop"){
            vto.value = input * 98.5784;
        }
    }else if(fromv == "Tablespoon"){
        if(tov == "Teaspoon"){
            vto.value = input * 3;
        }else if(tov == "Tablespoon"){
            vto.value = input;
        }else if(tov == "Cup"){
            vto.value = input / 16;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 0.5204;
        }else if(tov == "Pint"){
            vto.value = input * 0.026;
        }else if(tov == "Quart"){
            vto.value = input * 0.013;
        }else if(tov == "Gallon"){
            vto.value = input * 0.0033;
        }else if(tov == "Barrel"){
            vto.value = input / 11067.9545;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 10752;
        }else if(tov == "Mililitre"){
            vto.value = input * 14.7868;
        }else if(tov == "Litre"){
            vto.value = input / 67.628;
        }else if(tov == "Cubic cm"){
            vto.value = input * 14.7868;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 67628.0454;
        }else if(tov == "Cubic Inch"){
            vto.value = input / 1.1082;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 1915.013;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 51705.3514;
        }else if(tov == "Drop"){
            vto.value = input * 295.7353;
        }
    }else if(fromv == "Cup"){
        if(tov == "Teaspoon"){
            vto.value = input * 48;
        }else if(tov == "Tablespoon"){
            vto.value = input * 16;
        }else if(tov == "Cup"){
            vto.value = input;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 8.3267;
        }else if(tov == "Pint"){
            vto.value = input * 0.4163;
        }else if(tov == "Quart"){
            vto.value = input * 0.2082;
        }else if(tov == "Gallon"){
            vto.value = input * 0.052;
        }else if(tov == "Barrel"){
            vto.value = input / 691.7472;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 672;
        }else if(tov == "Mililitre"){
            vto.value = input * 236.5882;
        }else if(tov == "Litre"){
            vto.value = input / 4.2268;
        }else if(tov == "Cubic cm"){
            vto.value = input * 236.5882;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 4226.7528;
        }else if(tov == "Cubic Inch"){
            vto.value = input / 0.0693;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 119.6883;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 3231.5845;
        }else if(tov == "Drop"){
            vto.value = input * 4731.7647;
        }
    }else if(fromv == "Fluid Ounce"){
        if(tov == "Teaspoon"){
            vto.value = input * 5.7646;
        }else if(tov == "Tablespoon"){
            vto.value = input * 1.9215;
        }else if(tov == "Cup"){
            vto.value = input * 0.1201;
        }else if(tov == "Fluid Ounce"){
            vto.value = input;
        }else if(tov == "Pint"){
            vto.value = input * 0.05;
        }else if(tov == "Quart"){
            vto.value = input * 0.025;
        }else if(tov == "Gallon"){
            vto.value = input * 0.0062;
        }else if(tov == "Barrel"){
            vto.value = input / 5760;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 5595.5705;
        }else if(tov == "Mililitre"){
            vto.value = input * 28.4131;
        }else if(tov == "Litre"){
            vto.value = input / 35.1951;
        }else if(tov == "Cubic cm"){
            vto.value = input * 28.4131;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 35195.0797;
        }else if(tov == "Cubic Inch"){
            vto.value = input / 0.5767;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 996.6137;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 26908.5696;
        }else if(tov == "Drop"){
            vto.value = input * 568.2612;
        }
    }else if(fromv == "Pint"){
        if(tov == "Teaspoon"){
            vto.value = input * 115.2912;
        }else if(tov == "Tablespoon"){
            vto.value = input * 38.4304;
        }else if(tov == "Cup"){
            vto.value = input * 2.4019;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 20;
        }else if(tov == "Pint"){
            vto.value = input;
        }else if(tov == "Quart"){
            vto.value = input * 0.5;
        }else if(tov == "Gallon"){
            vto.value = input * 0.125;
        }else if(tov == "Barrel"){
            vto.value = input / 288;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 279.7785;
        }else if(tov == "Mililitre"){
            vto.value = input * 568.2612;
        }else if(tov == "Litre"){
            vto.value = input / 1.7598;
        }else if(tov == "Cubic cm"){
            vto.value = input * 568.2612;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 1759.754;
        }else if(tov == "Cubic Inch"){
            vto.value = input / 0.0288;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 49.8307;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 1345.4285;
        }else if(tov == "Drop"){
            vto.value = input * 11365.225;
        }
    }else if(fromv == "Quart"){
        if(tov == "Teaspoon"){
            vto.value = input * 230.5824;
        }else if(tov == "Tablespoon"){
            vto.value = input * 76.8608;
        }else if(tov == "Cup"){
            vto.value = input * 4.8038;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 40;
        }else if(tov == "Pint"){
            vto.value = input * 2;
        }else if(tov == "Quart"){
            vto.value = input;
        }else if(tov == "Gallon"){
            vto.value = input * 0.25;
        }else if(tov == "Barrel"){
            vto.value = input / 144;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 139.8893;
        }else if(tov == "Mililitre"){
            vto.value = input * 1136.5225;
        }else if(tov == "Litre"){
            vto.value = input / 0.8799;
        }else if(tov == "Cubic cm"){
            vto.value = input * 1136.5225;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 879.877;
        }else if(tov == "Cubic Inch"){
            vto.value = input / 0.0144;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 24.9153;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 672.7142;
        }else if(tov == "Drop"){
            vto.value = input * 22730.45;
        }
    }else if(fromv == "Gallon"){
        if(tov == "Teaspoon"){
            vto.value = input * 922.3295;
        }else if(tov == "Tablespoon"){
            vto.value = input * 307.4432;
        }else if(tov == "Cup"){
            vto.value = input * 19.2152;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 160;
        }else if(tov == "Pint"){
            vto.value = input * 8;
        }else if(tov == "Quart"){
            vto.value = input * 4;
        }else if(tov == "Gallon"){
            vto.value = input;
        }else if(tov == "Barrel"){
            vto.value = input / 36;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 34.9723;
        }else if(tov == "Mililitre"){
            vto.value = input * 4546.09;
        }else if(tov == "Litre"){
            vto.value = input / 0.22;
        }else if(tov == "Cubic cm"){
            vto.value = input * 4546.09;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 219.9692;
        }else if(tov == "Cubic Inch"){
            vto.value = input / 0.0036;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 6.2288;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 168.1786;
        }else if(tov == "Drop"){
            vto.value = input * 90921.8;
        }
    }else if(fromv == "Barrel"){
        if(tov == "Teaspoon"){
            vto.value = input * 33203.8635;
        }else if(tov == "Tablespoon"){
            vto.value = input * 11067.9545;
        }else if(tov == "Cup"){
            vto.value = input * 691.7472;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 5760;
        }else if(tov == "Pint"){
            vto.value = input * 288;
        }else if(tov == "Quart"){
            vto.value = input * 144;
        }else if(tov == "Gallon"){
            vto.value = input * 36;
        }else if(tov == "Barrel"){
            vto.value = input;
        }else if(tov == "Oil Barrel"){
            vto.value = input * 1.0294;
        }else if(tov == "Mililitre"){
            vto.value = input * 163659.24;
        }else if(tov == "Litre"){
            vto.value = input * 163.6592;
        }else if(tov == "Cubic cm"){
            vto.value = input * 163659.24;
        }else if(tov == "Cubic Metre"){
            vto.value = input * 0.16365924;
        }else if(tov == "Cubic Inch"){
            vto.value = input * 9987.0996;
        }else if(tov == "Cubic Foot"){
            vto.value = input * 5.7796;
        }else if(tov == "Cubic Yard"){
            vto.value = input * 0.2141;
        }else if(tov == "Drop"){
            vto.value = input * 3273184.8;
        }
    }else if(fromv == "Oil Barrel"){
        if(tov == "Teaspoon"){
            vto.value = input * 32256;
        }else if(tov == "Tablespoon"){
            vto.value = input * 10752;
        }else if(tov == "Cup"){
            vto.value = input * 672;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 5595.5705;
        }else if(tov == "Pint"){
            vto.value = input * 279.7785;
        }else if(tov == "Quart"){
            vto.value = input * 139.8893;
        }else if(tov == "Gallon"){
            vto.value = input * 34.9723;
        }else if(tov == "Barrel"){
            vto.value = input * 0.9715;
        }else if(tov == "Oil Barrel"){
            vto.value = input;
        }else if(tov == "Mililitre"){
            vto.value = input * 158987.2949;
        }else if(tov == "Litre"){
            vto.value = input * 158.9873;
        }else if(tov == "Cubic cm"){
            vto.value = input * 158987.2949;
        }else if(tov == "Cubic Metre"){
            vto.value = input * 0.159;
        }else if(tov == "Cubic Inch"){
            vto.value = input * 9702;
        }else if(tov == "Cubic Foot"){
            vto.value = input * 5.6146;
        }else if(tov == "Cubic Yard"){
            vto.value = input * 0.2079;
        }else if(tov == "Drop"){
            vto.value = input * 3179745.8986;
        }
    }else if(fromv == "Mililitre"){
        if(tov == "Teaspoon"){
            vto.value = input * 0.2029;
        }else if(tov == "Tablespoon"){
            vto.value = input * 0.0676;
        }else if(tov == "Cup"){
            vto.value = input * 0.0042;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 0.0352;
        }else if(tov == "Pint"){
            vto.value = input * 0.0018;
        }else if(tov == "Quart"){
            vto.value = input * 0.0009;
        }else if(tov == "Gallon"){
            vto.value = input * 0.0002;
        }else if(tov == "Barrel"){
            vto.value = input / 163659.24;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 158987.2949;
        }else if(tov == "Mililitre"){
            vto.value = input;
        }else if(tov == "Litre"){
            vto.value = input * 0.001;
        }else if(tov == "Cubic cm"){
            vto.value = input;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 1000000;
        }else if(tov == "Cubic Inch"){
            vto.value = input * 0.061;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 28316.8466;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 764554.8693;
        }else if(tov == "Drop"){
            vto.value = input * 20;
        }
    }else if(fromv == "Litre"){
        if(tov == "Teaspoon"){
            vto.value = input * 202.8841;
        }else if(tov == "Tablespoon"){
            vto.value = input * 67.628;
        }else if(tov == "Cup"){
            vto.value = input * 4.2268;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 35.1951;
        }else if(tov == "Pint"){
            vto.value = input * 1.7598;
        }else if(tov == "Quart"){
            vto.value = input * 0.8799;
        }else if(tov == "Gallon"){
            vto.value = input * 0.22;
        }else if(tov == "Barrel"){
            vto.value = input / 163.65924;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 158.9872949;
        }else if(tov == "Mililitre"){
            vto.value = input * 1000;
        }else if(tov == "Litre"){
            vto.value = input;
        }else if(tov == "Cubic cm"){
            vto.value = input * 1000;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 1000;
        }else if(tov == "Cubic Inch"){
            vto.value = input * 61.0237;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 28.3168466;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 764.5548693;
        }else if(tov == "Drop"){
            vto.value = input * 20000;
        }
    }else if(fromv == "Cubic cm"){
        if(tov == "Teaspoon"){
            vto.value = input * 0.2028841;
        }else if(tov == "Tablespoon"){
            vto.value = input * 0.067628;
        }else if(tov == "Cup"){
            vto.value = input * 0.0042268;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 0.0351951;
        }else if(tov == "Pint"){
            vto.value = input * 0.0017598;
        }else if(tov == "Quart"){
            vto.value = input * 0.0008799;
        }else if(tov == "Gallon"){
            vto.value = input * 0.00022;
        }else if(tov == "Barrel"){
            vto.value = input / 163659.24;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 158987.2949;
        }else if(tov == "Mililitre"){
            vto.value = input;
        }else if(tov == "Litre"){
            vto.value = input * 0.001;
        }else if(tov == "Cubic cm"){
            vto.value = input;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 1000000;
        }else if(tov == "Cubic Inch"){
            vto.value = input * 0.0610237;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 28316.8466;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 764554.8693;
        }else if(tov == "Drop"){
            vto.value = input * 20;
        }
    }else if(fromv == "Cubic Metre"){
        if(tov == "Teaspoon"){
            vto.value = input * 202884.1362;
        }else if(tov == "Tablespoon"){
            vto.value = input * 67628.0454;
        }else if(tov == "Cup"){
            vto.value = input * 4226.7528;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 35195.0797;
        }else if(tov == "Pint"){
            vto.value = input * 1759.754;
        }else if(tov == "Quart"){
            vto.value = input * 879.877;
        }else if(tov == "Gallon"){
            vto.value = input * 219.9692;
        }else if(tov == "Barrel"){
            vto.value = input / 0.16365924;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 0.1589872949;
        }else if(tov == "Mililitre"){
            vto.value = input * 1000000;
        }else if(tov == "Litre"){
            vto.value = input * 1000;
        }else if(tov == "Cubic cm"){
            vto.value = input * 1000000;
        }else if(tov == "Cubic Metre"){
            vto.value = input;
        }else if(tov == "Cubic Inch"){
            vto.value = input * 61023.7441;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 0.0283168466;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 0.7645548693;
        }else if(tov == "Drop"){
            vto.value = input * 20000000;
        }
    }else if(fromv == "Cubic Inch"){
        if(tov == "Teaspoon"){
            vto.value = input * 3.3247;
        }else if(tov == "Tablespoon"){
            vto.value = input * 1.1082;
        }else if(tov == "Cup"){
            vto.value = input * 0.0693;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 0.5767;
        }else if(tov == "Pint"){
            vto.value = input * 0.0288;
        }else if(tov == "Quart"){
            vto.value = input * 0.0144;
        }else if(tov == "Gallon"){
            vto.value = input * 0.0036;
        }else if(tov == "Barrel"){
            vto.value = input / 9987.0996;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 9702;
        }else if(tov == "Mililitre"){
            vto.value = input * 16.3871;
        }else if(tov == "Litre"){
            vto.value = input * 0.0164;
        }else if(tov == "Cubic cm"){
            vto.value = input * 16.3871;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 61023.7441;
        }else if(tov == "Cubic Inch"){
            vto.value = input;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 1728;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 46656.0007;
        }else if(tov == "Drop"){
            vto.value = input * 327.7413;
        }
    }else if(fromv == "Cubic Foot"){
        if(tov == "Teaspoon"){
            vto.value = input * 5745.039;
        }else if(tov == "Tablespoon"){
            vto.value = input * 1915.013;
        }else if(tov == "Cup"){
            vto.value = input * 119.6883;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 996.6137;
        }else if(tov == "Pint"){
            vto.value = input * 49.8307;
        }else if(tov == "Quart"){
            vto.value = input * 24.9153;
        }else if(tov == "Gallon"){
            vto.value = input * 6.2288;
        }else if(tov == "Barrel"){
            vto.value = input / 5.7796;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 5.6146;
        }else if(tov == "Mililitre"){
            vto.value = input * 28316.8466;
        }else if(tov == "Litre"){
            vto.value = input * 28.3168;
        }else if(tov == "Cubic cm"){
            vto.value = input * 28316.8466;
        }else if(tov == "Cubic Metre"){
            vto.value = input * 0.0283;
        }else if(tov == "Cubic Inch"){
            vto.value = input * 1728;
        }else if(tov == "Cubic Foot"){
            vto.value = input;
        }else if(tov == "Cubic Yard"){
            vto.value = input * 0.037;
        }else if(tov == "Drop"){
            vto.value = input * 566336.9318;
        }
    }else if(fromv == "Cubic Yard"){
        if(tov == "Teaspoon"){
            vto.value = input * 155116.0542;
        }else if(tov == "Tablespoon"){
            vto.value = input * 51705.3514;
        }else if(tov == "Cup"){
            vto.value = input * 3231.5845;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 26908.5696;
        }else if(tov == "Pint"){
            vto.value = input * 1345.4285;
        }else if(tov == "Quart"){
            vto.value = input * 672.7142;
        }else if(tov == "Gallon"){
            vto.value = input * 168.1786;
        }else if(tov == "Barrel"){
            vto.value = input * 4.6716;
        }else if(tov == "Oil Barrel"){
            vto.value = input * 4.8089;
        }else if(tov == "Mililitre"){
            vto.value = input * 764554.8693;
        }else if(tov == "Litre"){
            vto.value = input * 764.5548693;
        }else if(tov == "Cubic cm"){
            vto.value = input * 764554.8693;
        }else if(tov == "Cubic Metre"){
            vto.value = input * 0.7645548693;
        }else if(tov == "Cubic Inch"){
            vto.value = input * 46656.0007;
        }else if(tov == "Cubic Foot"){
            vto.value = input * 27;
        }else if(tov == "Cubic Yard"){
            vto.value = input;
        }else if(tov == "Drop"){
            vto.value = input * 15291097.3855;
        }
    }else if(fromv == "Drop"){
        if(tov == "Teaspoon"){
            vto.value = input * 0.0101;
        }else if(tov == "Tablespoon"){
            vto.value = input * 0.0034;
        }else if(tov == "Cup"){
            vto.value = input * 0.0002;
        }else if(tov == "Fluid Ounce"){
            vto.value = input * 0.0018;
        }else if(tov == "Pint"){
            vto.value = input * 0.0001;
        }else if(tov == "Quart"){
            vto.value = input / 22730.45;
        }else if(tov == "Gallon"){
            vto.value = input / 90921.8;
        }else if(tov == "Barrel"){
            vto.value = input / 3273184.8;
        }else if(tov == "Oil Barrel"){
            vto.value = input / 3179745.8986;
        }else if(tov == "Mililitre"){
            vto.value = input / 20;
        }else if(tov == "Litre"){
            vto.value = input / 20000;
        }else if(tov == "Cubic cm"){
            vto.value = input / 20;
        }else if(tov == "Cubic Metre"){
            vto.value = input / 20000000;
        }else if(tov == "Cubic Inch"){
            vto.value = input / 327.7413;
        }else if(tov == "Cubic Foot"){
            vto.value = input / 566336.9318;
        }else if(tov == "Cubic Yard"){
            vto.value = input / 15291097.3855;
        }else if(tov == "Drop"){
            vto.value = input;
        }
    };
    if(fromv == "Celsius"){
        if(tov == "Celsius"){
            vto.value = input;
        }else if(tov == "Fahrenheit"){
            vto.value = (input * 1.8) + 32;
        }else if(tov == "Kelvin"){
            vto.value = parseInt(input) + 273.15;
        }
    }else if(fromv == "Fahrenheit"){
        if(tov == "Celsius"){
            vto.value = (input - 32) / 1.8;
        }else if(tov == "Fahrenheit"){
            vto.value = input;
        }else if(tov == "Kelvin"){
            vto.value = ((input - 32) / 1.8) + 273.15;
        }
    }else if(fromv == "Kelvin"){
        if(tov == "Celsius"){
            vto.value = (input - 273.15);
        }else if(tov == "Fahrenheit"){
            vto.value = ((input - 273.15) * 1.8) + 32;
        }else if(tov == "Kelvin"){
            vto.value = input;
        }
    };
    if(fromv == "Nanosecond"){
        if(tov == "Nanosecond"){
            vto.value = input;
        }else if(tov == "Millisecond"){
            vto.value = input / 1000000;
        }else if(tov == "Second"){
            vto.value = input / 1000000000;
        }else if(tov == "Minute"){
            vto.value = input / 60000000000;
        }else if(tov == "Hour"){
            vto.value = input / 3600000000000;
        }else if(tov == "Day"){
            vto.value = input / 86400000000000;
        }else if(tov == "Week"){
            vto.value = input / 604800000000000;
        }else if(tov == "Month"){
            vto.value = input / (86400000000000 * 30);
        }else if(tov == "Year"){
            vto.value = input / (86400000000000 * 365);
        }
    }else if(fromv == "Millisecond"){
        if(tov == "Nanosecond"){
            vto.value = input * 1000000;
        }else if(tov == "Millisecond"){
            vto.value = input;
        }else if(tov == "Second"){
            vto.value = input / 1000;
        }else if(tov == "Minute"){
            vto.value = input / 60000;
        }else if(tov == "Hour"){
            vto.value = input / 3600000;
        }else if(tov == "Day"){
            vto.value = input / 86400000;
        }else if(tov == "Week"){
            vto.value = input / 604800000;
        }else if(tov == "Month"){
            vto.value = input / (86400000 * 30);
        }else if(tov == "Year"){
            vto.value = input / (86400000 * 365);
        }
    }else if(fromv == "Second"){
        if(tov == "Nanosecond"){
            vto.value = input * 1000000;
        }else if(tov == "Millisecond"){
            vto.value = input * 1000;
        }else if(tov == "Second"){
            vto.value = input;
        }else if(tov == "Minute"){
            vto.value = input / 60;
        }else if(tov == "Hour"){
            vto.value = input / 3600;
        }else if(tov == "Day"){
            vto.value = input / 86400;
        }else if(tov == "Week"){
            vto.value = input / 604800;
        }else if(tov == "Month"){
            vto.value = input / (86400 * 30);
        }else if(tov == "Year"){
            vto.value = input / (86400 * 365);
        }
    }else if(fromv == "Minute"){
        if(tov == "Nanosecond"){
            vto.value = input * 60000000000;
        }else if(tov == "Millisecond"){
            vto.value = input * 60000;
        }else if(tov == "Second"){
            vto.value = input * 60;
        }else if(tov == "Minute"){
            vto.value = input;
        }else if(tov == "Hour"){
            vto.value = input / 60;
        }else if(tov == "Day"){
            vto.value = input / 1440;
        }else if(tov == "Week"){
            vto.value = input / 10080;
        }else if(tov == "Month"){
            vto.value = input / (1440 * 30);
        }else if(tov == "Year"){
            vto.value = input / (1440 * 365);
        }
    }else if(fromv == "Hour"){
        if(tov == "Nanosecond"){
            vto.value = input * 3600000000000;
        }else if(tov == "Millisecond"){
            vto.value = input * 3600000;
        }else if(tov == "Second"){
            vto.value = input * 3600;
        }else if(tov == "Minute"){
            vto.value = input * 60;
        }else if(tov == "Hour"){
            vto.value = input;
        }else if(tov == "Day"){
            vto.value = input / 24;
        }else if(tov == "Week"){
            vto.value = input / 168;
        }else if(tov == "Month"){
            vto.value = input / (24 * 30);
        }else if(tov == "Year"){
            vto.value = input / (24 * 365);
        }
    }else if(fromv == "Day"){
        if(tov == "Nanosecond"){
            vto.value = input * 86400000000000;
        }else if(tov == "Millisecond"){
            vto.value = input * 86400000;
        }else if(tov == "Second"){
            vto.value = input * 86400;
        }else if(tov == "Minute"){
            vto.value = input * 1440;
        }else if(tov == "Hour"){
            vto.value = input * 24;
        }else if(tov == "Day"){
            vto.value = input;
        }else if(tov == "Week"){
            vto.value = input / 7;
        }else if(tov == "Month"){
            vto.value = input / 30;
        }else if(tov == "Year"){
            vto.value = input / 365;
        }
    }else if(fromv == "Week"){
        if(tov == "Nanosecond"){
            vto.value = input * 604800000000000;
        }else if(tov == "Millisecond"){
            vto.value = input * 604800000;
        }else if(tov == "Second"){
            vto.value = input * 604800;
        }else if(tov == "Minute"){
            vto.value = input * 10080;
        }else if(tov == "Hour"){
            vto.value = input * 168;
        }else if(tov == "Day"){
            vto.value = input * 7;
        }else if(tov == "Week"){
            vto.value = input;
        }else if(tov == "Month"){
            vto.value = input * ((1 / 30) * 7);
        }else if(tov == "Year"){
            vto.value = input * ((1 / 365) * 7);
        }
    }else if(fromv == "Month"){
        if(tov == "Nanosecond"){
            vto.value = input * 2628000000000000;
        }else if(tov == "Millisecond"){
            vto.value = input * 2628000000;
        }else if(tov == "Second"){
            vto.value = input * 2628000;
        }else if(tov == "Minute"){
            vto.value = input * 43200;
        }else if(tov == "Hour"){
            vto.value = input * 720;
        }else if(tov == "Day"){
            vto.value = input * 30;
        }else if(tov == "Week"){
            vto.value = input * (1 / 7) * 30;
        }else if(tov == "Month"){
            vto.value = input;
        }else if(tov == "Year"){
            vto.value = input * (1 / 365) * 30;
        }
    }else if(fromv == "Year"){
        if(tov == "Nanosecond"){
            vto.value = input * 31536000000000000;
        }else if(tov == "Millisecond"){
            vto.value = input * 31536000000;
        }else if(tov == "Second"){
            vto.value = input * 31536000;
        }else if(tov == "Minute"){
            vto.value = input * 525600;
        }else if(tov == "Hour"){
            vto.value = input * 8760;
        }else if(tov == "Day"){
            vto.value = input * 365;
        }else if(tov == "Week"){
            vto.value = input / ((1 / 365) * 7);
        }else if(tov == "Month"){
            vto.value = input / ((1 / 365) * 30);
        }else if(tov == "Year"){
            vto.value = input;
        }
    };
    // reverse.addEventListener("click", function(){
    //     for(i = 0; i < l; i++){
    //         console.log(i);
    //         if(fradio[i].checked == true){
    //             console.log(i + " " + fradio[i].checked);
    //             x = i;
    //         }
    //     }
    //     for(j = 0; j < l; j++){
    //         if(tradio[j].checked == true){
    //             y = j;
    //         }
    //     }
    //     console.log("f " + x);
    //     console.log("t " + y);
    //     tradio[x].checked = true;
    //     fradio[y].checked = true;
    //     reverse.addEventListener("click", check())
    // })
    delet.addEventListener("click", function(){
        vfrom.value = 0;
        delet.addEventListener("click", check());
    })
}



