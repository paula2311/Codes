function encryptName() {
    const nameInput = document.getElementById("input");
    const encryptionTypeSelect = document.getElementById("choose_code");
    const encryptedNameOutput = document.getElementById("output");

    const arabicAlphabet = {
        'ا': 1, 'ب': 2, 'ت': 3, 'ث': 4, 'ج': 5, 'ح': 6, 'خ': 7, 'د': 8, 'ذ': 9, 'ر': 10,
        'ز': 11, 'س': 12, 'ش': 13, 'ص': 14, 'ض': 15, 'ط': 16, 'ظ': 17, 'ع': 18, 'غ': 19, 'ف': 20,
        'ق': 21, 'ك': 22, 'ل': 23, 'م': 24, 'ن': 25, 'ه': 26, 'و': 27, 'ي': 28, ' ': '/'
    };
    const name = nameInput.value;
    const encryptionType = encryptionTypeSelect.value;

    let encryptedName = "";

    if (encryptionType === "1") {
        for (let i = 0; i < name.length; i++) {
            const char = name[i].toLowerCase();
            if (arabicAlphabet[char]) {
                encryptedName += arabicAlphabet[char]+'-';
            } else {
                encryptedName += char+'-';
            }
        }
    }


    else if(encryptionType === "2"){
        const sections = {
            section1: ['ا', 'ب', 'ت'],
            section2: ['ث', 'ج', 'ح'],
            section3: ['خ', 'د', 'ذ'],
            section4: ['ر', 'ز', 'س'],
            section5: ['ش', 'ص', 'ض'],
            section6: ['ط', 'ظ', 'ع'],
            section7: ['غ', 'ف', 'ق'],
            section8: ['ك', 'ل', 'م'],
            section9: ['ن', 'ه', 'و'],
            section10: ['ي'],
            section11: [' ']
        };
        for (let i = 0; i < name.length; i++) {
            let found = false;
            let shape = '';
            for (const section in sections) {
                if (sections[section].includes(name[i])) {
                    if(section == 'section1'){
                        shape =`
                        |__${sections[section].indexOf(name[i]) + 1}
                        `;
                    }
                    else if(section == 'section2'){
                        shape = `
                         ${sections[section].indexOf(name[i]) + 1}
                        |__|
                        `;
                    }
                    else if(section == 'section3'){
                        shape = `
                        ${sections[section].indexOf(name[i]) + 1}__|
                        `;
                    }
                    else if(section == 'section4'){
                        shape =  `
                        ----
                        | ${sections[section].indexOf(name[i]) + 1}
                        ----
                        ` ;
                    }
                    else if(section == 'section5'){
                        shape =  `
                        ----
                        | ${sections[section].indexOf(name[i]) + 1} |
                        ----
                        ` ;
                    }
                    else if(section == 'section6'){
                        shape =  `
                        ----
                         ${sections[section].indexOf(name[i]) + 1} |
                        ----
                        ` ;
                    }
                    else if(section == 'section7'){
                        shape =  `
                        ----
                        | ${sections[section].indexOf(name[i]) + 1} 
                        
                        ` ;
                    }
                    else if(section == 'section8'){
                        shape =  `
                        ----
                        | ${sections[section].indexOf(name[i]) + 1} |
                        
                        ` ;
                    }
                    else if(section == 'section9'){
                        shape =  `
                        ----
                        ${sections[section].indexOf(name[i]) + 1}  |
                        
                        ` ;
                    }
                    else if(section == 'section10'){
                        shape =  `
                        /\\
                        --
                        ` ;
                    }
                    else if(section == 'section11'){
                        shape =  `
                        /
                        ` ;
                    }
                    encryptedName += shape ;
                        found = true;
                        break;
                    }
                }
        }
        
    }


    else if(encryptionType === "3"){
        const nameChars = name.split('');
        const reversedNameChars = nameChars.reverse();
        const reversedName = reversedNameChars.join('');
        encryptedName = reversedName;
    }

    encryptedNameOutput.textContent = "Encrypted name: " + encryptedName;
}