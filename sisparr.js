const symptomsData = {
    GAD: [
        { id: "g01", question: "Mengalami kekhawatiran yang berlebihan tentang berbagai hal.", cfPakar: 0.5 },
        { id: "g02", question: "Kesulitan untuk mengontrol kekhawatiran.", cfPakar: 0.6 },
        { id: "g03", question: "Merasa cemas atau tegang hampir setiap hari.", cfPakar: 0.7 },
        { id: "g04", question: "Merasa lelah atau kehabisan energi.", cfPakar: 0.4 },
        { id: "g05", question: "Mengalami ketegangan atau nyeri pada otot.", cfPakar: 0.3 },
        { id: "g06", question: "Merasakan detak jantung yang cepat.", cfPakar: 0.5 },
        { id: "g07", question: "Mengalami keringat berlebih saat cemas.", cfPakar: 0.4 },
        { id: "g08", question: "Mengalami masalah pencernaan, seperti mual, diare, atau perut kembung.", cfPakar: 0.5 },
        { id: "g09", question: "Mengalami kesulitan dalam berkonsentrasi.", cfPakar: 0.4 },
        { id: "g10", question: "Merasa gelisah, tidak nyaman, atau tidak bisa duduk diam.", cfPakar: 0.4 },
        { id: "g11", question: "Memiliki pandangan negatif tentang masa depan atau merasa bahwa sesuatu yang buruk akan terjadi.", cfPakar: 0.5 },
        { id: "g12", question: "Menghindari situasi sosial atau interaksi dengan orang lain karena rasa cemas yang berlebihan.", cfPakar: 0.4 },
        { id: "g13", question: "Terhubung dengan orang lain karena kekhawatiran yang terus-menerus.", cfPakar: 0.4 },
    ],
    Phobia: [
        { id: "g14", question: "Merasa cemas atau gelisah saat menghadapi objek atau situasi yang ditakuti, bahkan hanya dengan memikirkan atau membayangkannya.", cfPakar: 0.5},
        { id: "g15", question: "Perasaan takut yang tidak logis dan sulit untuk hilang, dengan pemicu berupa objek, aktivitas, atau situasi tertentu.", cfPakar: 0.6 },
        { id: "g16", question: "Merasa detak jantung cepat", cfPakar: 0.4 },
        { id: "g17", question: "Kesulitan bernapas", cfPakar: 0.4 },
        { id: "g18", question: "Pusing atau merasa ingin pingsan", cfPakar: 0.4 },
        { id: "g19", question: "Sering menghindari objek, aktivitas, atau situasi tertentu.", cfPakar: 0.5 },
        { id: "g20", question: "Mengalami ketegangan pada otot, merasa seperti berada dalam keadaan tegang atau gelisah, serta sulit untuk bersantai.", cfPakar: 0.5 },
        { id: "g21", question: "Menganggap objek atau situasi yang ditakuti sebagai lebih berbahaya daripada kenyataannya.", cfPakar: 0.5 },
        { id: "g22", question: "Kesulitan dalam berkonsentrasi atau fokus pada tugas lain ketika menghadapi objek atau situasi yang ditakuti.", cfPakar: 0.4 },
        { id: "g61", question: "Ketakutan berlebihan muncul terhadap kemungkinan bahaya bagi diri sendiri atau orang lain.", cfPakar: 0.6},
    ],
    Kecemasan_Sosial: [
        { id: "g23", question: "Sering mengalami panik.", cfPakar: 0.6},
        { id: "g24", question: "Merasa takut untuk melakukan aktivitas sehari-hari, seperti bertemu orang asing, memulai percakapan, berbicara melalui telepon, bekerja, atau berbelanja.", cfPakar: 0.5},
        { id: "g25", question: "Menghindari atau merasa cemas secara berlebihan terhadap kegiatan sosial, seperti berbicara dalam kelompok, makan bersama, dan menghadiri acara besar.", cfPakar: 0.6},
        { id: "g26", question: "Sering kali merasa cemas saat melakukan hal-hal yang dianggap memalukan, seperti tersipu, berkeringat, atau terlihat tidak kompeten.", cfPakar: 0.5},
        { id: "g27", question: "Kesulitan untuk melakukan sesuatu ketika ada orang lain yang menonton, merasa diawasi dan dinilai terus-menerus.", cfPakar: 0.5},
        { id: "g28", question: "Takut akan kritik, menghindari kontak mata, atau memiliki tingkat kepercayaan diri yang rendah.", cfPakar: 0.5},
        { id: "g29", question: "Peningkatan detak jantung saat berada dalam situasi sosial.", cfPakar: 0.5},
        { id: "g30", question: "Berkeringat lebih dari biasanya, terutama di telapak tangan atau wajah.", cfPakar: 0.5},
        { id: "g31", question: "Merasa mual atau mengalami masalah pencernaan saat menghadapi situasi sosial.", cfPakar: 0.4}, 
        { id: "g32", question: "Kesulitan dalam memulai atau mempertahankan percakapan.", cfPakar: 0.4},
        { id: "g33", question: "Menghindari kontak mata atau berbicara dengan suara yang sangat pelan.", cfPakar: 0.5},
        { id: "g34", question: "Memiliki pikiran negatif yang berulang tentang diri sendiri dan bagaimana orang lain melihatnya.", cfPakar: 0.5},
        { id: "g35", question: "Mengkhawatirkan situasi sosial yang akan datang berhari-hari atau bahkan berminggu-minggu sebelumnya.", cfPakar: 0.6},
        { id: "g36", question: "Memiliki pandangan negatif tentang diri sendiri dan kemampuan sosial.", cfPakar: 0.5},
    ],
    PTSD: [
        { id: "g37", question: "Mengalami kilas balik atau mimpi buruk terkait peristiwa traumatis.", cfPakar: 0.7},
        { id: "g38", question: "Menghindari tempat, orang, aktivitas, pikiran, perasaan, atau percakapan yang berkaitan dengan peristiwa traumatis.", cfPakar: 0.6},
        { id: "g39", question: "Merasa cemas atau ketakutan yang intens saat diingatkan tentang peristiwa traumatis.", cfPakar: 0.6},
        { id: "g40", question: "Emosi yang mudah terpancing, sulit untuk rileks, atau selalu waspada (hipervigilance).", cfPakar: 0.5},
        { id: "g41", question: "Merasa terputus dari orang lain atau merasa tidak memiliki hubungan emosional.", cfPakar: 0.5},
        { id: "g42", question: "Sering merasa mati rasa emosional, mudah marah, dan merasa terasing dari orang lain.", cfPakar: 0.5},
        { id: "g43", question: "Gangguan tidur, termasuk insomnia dan mimpi buruk.", cfPakar: 0.6},
        { id: "g44", question: "Merespons dengan cara yang berlebihan terhadap situasi yang tidak berbahaya.", cfPakar: 0.5},
    ],
    Panic: [
        { id: "g06", question: "Merasakan detak jantung yang cepat atau berdebar-debar.", cfPakar: 0.5},
        { id: "g07", question: "Mengalami keringat berlebih saat cemas.", cfPakar: 0.4},
        { id: "g45", question: "Tubuh gemetar", cfPakar: 0.5},
        { id: "g46", question: "Napas terengah-engah", cfPakar: 0.5},
        { id: "g47", question: "Perasaan seperti sedang dicekik", cfPakar: 0.5},
        { id: "g48", question: "Nyeri dada atau ketidaknyamanan di area dada.", cfPakar: 0.6},
        { id: "g49", question: "Mual dan sakit perut", cfPakar: 0.5},
        { id: "g50", question: "Pusing dan ingin pingsan", cfPakar: 0.5},
        { id: "g51", question: "Sensasi mati rasa", cfPakar: 0.4},
        { id: "g52", question: "Perasaan takut tidak mampu mengendalikan diri.", cfPakar: 0.6},
        { id: "g53", question: "Ketakutan akan kehilangan kendali atau gila.", cfPakar: 0.6},
        { id: "g54", question: "Kecenderungan untuk menghindari aktivitas sosial atau situasi yang dapat memicu serangan.", cfPakar: 0.5},
        { id: "g55", question: "Rasa takut jika akan meninggal saat itu juga.", cfPakar: 0.6},
    ],
    OCD: [
        { id: "g56", question: "Adanya obsesi berupa pikiran atau dorongan yang berulang dan mengganggu, sering kali tidak masuk akal.", cfPakar: 0.6},
        { id: "g57", question: "Visualisasi yang menakutkan atau tidak diinginkan yang muncul secara tiba-tiba.", cfPakar: 0.6},
        { id: "g58", question: "Tindakan fisik yang dilakukan untuk mengurangi kecemasan, seperti mencuci tangan berulang kali, memeriksa kunci atau kompor, atau mengatur benda-benda dengan cara tertentu.", cfPakar: 0.5},
        { id: "g59", question: "Ketakutan berlebihan pada kuman atau kontaminasi.", cfPakar: 0.5},
        { id: "g60", question: "Perlu mengumpulkan barang bekas yang dianggap penting atau berguna di masa depan. ", cfPakar: 0.5},
        { id: "g61", question: "Ketakutan berlebihan muncul terhadap kemungkinan bahaya bagi diri sendiri atau orang lain.", cfPakar: 0.6},
        { id: "g62", question: "Ada keinginan untuk memastikan bahwa semuanya dalam kondisi simetris atau teratur.", cfPakar: 0.5},
    ],
};

let currentQuestionIndex = 0;
let totalCF = 0;
let userName = "";

// RSUD recommendations based on location
const rsudList = {
    "Surabaya": "RSUD Dr. Soetomo",
    "Malang": "RSUD Malang",
    "Bandung": "RSUD Hasan Sadikin",
    "Banyuwangi": "RSUD Blambangan",
    "Jember": "RSUD Jember",
    "Sidoarjo": "RSUD Sidoarjo",
    "Kediri": "RSUD Gambiran",
    "Probolinggo": "RSUD Probolinggo",
    "Gresik": "RSUD Gresik",
    "Pasuruan": "RSUD Pasuruan",
    "Jakarta": "RSJ Dr. Soeharto Heerdjan",
    "Yogyakarta": "RSJ Grhasia",
    "Solo": "RS Dr.OEN Kandang Sapi Solo",
};

function login() {
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');

    const name = nameInput.value;
    const age = ageInput.value;

    if (name && age) {
        document.getElementById('userName').textContent = name;
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('mainPage').classList.remove('hidden');
    } else {
        alert('Harap masukkan nama dan usia Anda.');
    }
}

function goToLogin() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');

    // Reset input di halaman login
    document.getElementById('nameInput').value = '';
    document.getElementById('ageInput').value = '';
}

function backToMain() {
    document.getElementById('aboutPage').classList.add('hidden');
    document.getElementById('newsPage').classList.add('hidden');
    document.getElementById('mainPage').classList.remove('hidden');
    document.getElementById("userName").innerText = userName;
}

function startDiagnosis() {
    currentQuestionIndex = 0;
    totalCF = 0;
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("disorderSelectionPage").classList.remove("hidden");
}

function showSymptoms() {
    const disorderType = document.getElementById("disorderType").value;
    document.getElementById("disorderSelectionPage").classList.add("hidden");
    document.getElementById("symptomPage").classList.remove("hidden");
    showSymptomQuestion(symptomsData[disorderType]);
}

function showSymptomQuestion(symptoms) {
    const symptomContainer = document.getElementById("symptomContainer");
    const currentSymptom = symptoms[currentQuestionIndex];

    const questionHTML = `
        <h3>Pertanyaan ${currentQuestionIndex + 1}: ${currentSymptom.question}</h3>
        <label for="answer">Jawaban:</label>
        <select id="answer">
            <option value="">Pilih jawaban</option>
            <option value="Tidak">Tidak</option>
            <option value="Jarang">Jarang</option>
            <option value="Sering">Sering</option>
        </select>
    `;
    symptomContainer.innerHTML = questionHTML;
}

function nextQuestion() {
    const answer = document.getElementById("answer").value;

    if (!answer) {
        alert("Silakan pilih jawaban.");
        return;
    }

    const currentSymptom = symptomsData[document.getElementById("disorderType").value][currentQuestionIndex];

    let cfUser = 0;
    switch (answer) {
        case "Tidak":
            cfUser = 0;
            break;
        case "Jarang":
            cfUser = currentSymptom.cfPakar * 0.5;
            break;
        case "Sering":
            cfUser = currentSymptom.cfPakar;
            break;
    }

    // Perhitungan CF
    if (totalCF === 0) {
        totalCF = cfUser; // Jika total CF masih 0, langsung assign
    } else {
        totalCF = totalCF + (cfUser * (1 - totalCF)); // Hitung total CF
    }

    currentQuestionIndex++;

    const disorderType = document.getElementById("disorderType").value;
    if (currentQuestionIndex < symptomsData[disorderType].length) {
        showSymptomQuestion(symptomsData[disorderType]);
    } else {
        analyzeDiagnosis();
    }
}
const firstAidActions = {
    GAD: "Latihan pernapasan dalam, meditasi, dan olahraga ringan dapat membantu mengurangi kecemasan berlebih. Jika gejala menetap, segera konsultasikan ke profesional kesehatan mental.",
    Phobia: "Identifikasi pemicu ketakutan dan mulai dengan paparan bertahap terhadap situasi tersebut. Teknik relaksasi seperti pernapasan dalam dapat membantu meredakan gejala.",
    Kecemasan_Sosial: "Latihan berbicara di depan cermin, meditasi, dan latihan relaksasi dapat membantu. Perlahan-lahan hadapi situasi sosial dengan dukungan teman atau keluarga.",
    PTSD: "Cari tempat yang tenang, lakukan teknik grounding seperti fokus pada pernapasan atau benda di sekitar. Segera hubungi tenaga profesional jika mengalami kilas balik intens.",
    Panic: "Lakukan teknik pernapasan lambat (4 detik tarik napas, 4 detik tahan, 4 detik hembuskan). Hindari tempat yang ramai dan cari lingkungan tenang.",
    OCD: "Alihkan perhatian dengan aktivitas produktif. Identifikasi obsesi dan kompulsi secara perlahan, dan coba untuk tidak merespon pemicu. Konsultasikan jika gejala mengganggu aktivitas harian.",
};
function analyzeDiagnosis() {
    const resultElement = document.getElementById("result");
    const accuracyPercentage = (totalCF * 100).toFixed(2);
    const location = document.getElementById('locationSelect').value; // Get selected location
    const recommendedRSUD = rsudList[location] || "RSUD terdekat tidak ditemukan.";

    const disorderType = document.getElementById("disorderType").value; // Ambil tipe gangguan
    const firstAid = firstAidActions[disorderType] || "Tidak ada langkah pertolongan pertama yang spesifik.";

    let resultText = "Diagnosa belum dapat ditentukan.";
    if(totalCF==0){
        resultText = "Tidak ada gejala yang terdeteksi, selalu jaga kesehatan anda. Disarankan untuk melakukan diagosa Jenis Gangguan Kecemasan yang lain, apabila merasa ada sesuatu yang mengganggu kenyamanan Anda.";
    } else if (totalCF >= 0.8) {
        resultText = "Segera pergi ke dokter untuk mendapatkan penanganan lebih lanjut.";
    } else if (totalCF >= 0.6) {
        resultText = "Sudah terlihat gejala, disarankan untuk konsultasi lebih lanjut ke dokter.";
    } else {
        resultText = "Gejala belum terlalu mengkhawatirkan, tetap pantau kondisi kesehatan Anda dan lakukan konsultasi dengan dokter jika gejala berlanjut atau memburuk. Disarankan juga untuk melakukan diagosa Jenis Gangguan Kecemasan yang lain, yang sesuai dengan kondisi dan gejala yang Anda rasakan untuk memastikan diagnosis lebih akurat";
    }

    resultElement.innerHTML = `${resultText}<br>Tingkat keakuratan diagnosis: ${accuracyPercentage}%<br>
    Rekomendasi RSUD terdekat: ${recommendedRSUD}<br>
    Rekomendasi Pertolongan Pertama: ${firstAid}
    `;
    document.getElementById("symptomPage").classList.add("hidden");
    document.getElementById("resultPage").classList.remove("hidden");
}

function restart() {
        document.getElementById('resultPage').classList.add('hidden'); // Sembunyikan halaman hasil
        document.getElementById('mainPage').classList.remove('hidden'); // Tampilkan halaman utama
}

function showNews() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('newsPage').classList.remove('hidden');
}

function showAbout() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('aboutPage').classList.remove('hidden');
}
function backToLogin() {
    document.getElementById('newsPage').classList.add('hidden');
    document.getElementById('aboutPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('mainPage').classList.add('hidden');
}