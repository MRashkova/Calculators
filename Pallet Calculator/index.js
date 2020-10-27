const enterDataM = document.querySelector('.enterDataM');      

            enterDataM.addEventListener('submit', function(e)  {
                //prevent refreshing the page
                e.preventDefault();             

                //calculating number of packages in a pallet
                let width = document.querySelector('#width').valueAsNumber;
                let height = document.querySelector('#height').valueAsNumber;
                let len = document.querySelector('#len').valueAsNumber;
                let maxH = document.querySelector('#maxH').valueAsNumber;
                let maxW = document.querySelector('#maxW').valueAsNumber;
                let weight = document.querySelector('#weight').valueAsNumber;
                let output = document.querySelector('.output');

                let lengthRes = 1200 / len;                
                let widthRes = 800 / width;                
                let heightRes = maxH / height;
                let numberOfPackages = (Math.floor(lengthRes)) * (Math.floor(widthRes)) * (Math.floor(heightRes));
               
                 //calculating number of layers in a pallet
                 let nLayers = heightRes;             

                 //calculating the surface usage on the first layer               
                const maxSurface = 960000;
                let surfaceLen = Math.floor(lengthRes) * len;
                let surfaceWidth = Math.floor(widthRes) * width;
                let surface = surfaceLen * surfaceWidth;               
                let surfaceUsage = (surface / maxSurface) * 100;

                //calculating the volume usage of the whole pallet
                const maxVolume = 1632000000;
                let volume = (height * width * len) * numberOfPackages;
                let volumeUsage = (volume / maxVolume) * 100;

                 //total weight calculations
                let totalWeight = weight * numberOfPackages;

                if (totalWeight > maxW) {
                    totalWeight = 'The total weight is higher than the maximum weight of the pallet!'
                }

                if (len > 800) {
                    output.innerHTML = `<h2 class="h2">Result:</h2>
                                <p class="par"><b>The length of the package must be less than the length of the pallet!</b></p>`;
                    output.classList.remove('d-visibility');             
                } else if (width > 1200) {
                    output.innerHTML = `<h2 class="h2">Result:</h2>
                                <p class="par"><b>The width of the package must be less than the width of the pallet!</b></p>`;
                    output.classList.remove('d-visibility');             
                    } else if (height > maxH) {                    
                    output.innerHTML = `<h2 class="h2">Result:</h2>
                                <p class="par"><b>The maximum height of the pallet must be higher than the hight of the package!</b></p>`;
                    output.classList.remove('d-visibility');             
                } else if (weight > maxW) {
                    output.innerHTML = `<h2 class="h2">Result:</h2>
                                <p class="par"><b>The maximum weight of the pallet must be higher than the weight of the package!</b></p>`;
                    output.classList.remove('d-visibility');  
                } else {
                
                output.innerHTML =    `
                    <h2 class="h2">Result:</h2>
                    <br>
                    <table class="tableStyle">
                        <tr> 
                            <td> 
                                <p class="par">Package Size:</p>
                            </td>
                            <td class="tdStyle">
                                <p class="par packageSize"> <b>${width}</b> mm x <b>${len}</b> mm x <b>${height}</b> mm</p> 
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <p class="par">Number of Packages:</p>
                            </td>
                            <td class="tdStyle"> 
                                <p class="par numberOfPackages"><b>${numberOfPackages}</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <p class="par">Pallet Size:</p>   
                            </td>
                            <td class="tdStyle"> 
                                <p class="par palletSize"><b>1200</b> mm x <b>800</b> mm x <b>${maxH}</b> mm</p>   
                            </td> 
                        </tr>
                        <tr>
                            <td> 
                                <p class="par">Number of Layers:</p>
                            </td>
                            <td class="tdStyle"> 
                                <p class="par nLayers"><b>${Math.floor(nLayers)}</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <p class="par">Surface Usage:</p>
                            </td>
                            <td class="tdStyle"> 
                                <p class="par surfaceUsage"> <b>${Math.round(surfaceUsage)}%</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <p class="par">Volume Usage:</p>
                            </td>
                            <td class="tdStyle"> 
                                <p class="par volumeUsage"> <b>${Math.round(volumeUsage)}%</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td> 
                                <p class="par">Total Weight:</p>
                            </td>
                            <td class="tdStyle"> 
                                <p class="par totalWeight"><b>${totalWeight}</b></p>
                            </td>
                        </tr>
                    </table>
                `;              
                
                output.classList.remove('d-visibility');             
                }                       
                
            });