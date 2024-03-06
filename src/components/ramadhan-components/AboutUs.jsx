import React from "react";
import heroImg from "../../assets/hero_img.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-ramadhan-green mt-5 font-poppins" id="aboutUs">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-1 h-[1300px] xl:h-[450px] font-mono mt-10 p-10 text-center text-white">
      <div className="right-side flex justify-center flex-col p-0 xl:p-10">
          <h1 className="text-5xl font-bold">
              Tentang Kegiatan Ramadhan
          </h1>
          <p className="text-xl xl:text-2xl mt-5 text-justify">
Setiap tahun selama bulan Ramadhan, Himpunan Remaja Muslim Masjid Al-Ihsaan Sanur menyelenggarakan bazzar Ramadhan yang menjadi pusat aktivitas masyarakat untuk berbelanja makanan, minuman, pakaian, dan alat sholat, serambi mempererat ikatan sosial. Selain itu, kegiatan Pesantren Kilat menarik para remaja dan murid TPQ dengan berbagai lomba menarik seperti adzan, juz amma, doa sehari-hari, mewarnai, story telling, dan cerdas cermat, yang bertujuan meningkatkan pengetahuan dan keterampilan beragama sambil memupuk semangat kompetisi yang positif. Dengan demikian, Himpunan Remaja Muslim Masjid Al-Ihsaan Sanur berusaha memperkuat hubungan kebersamaan dan ketaqwaan kepada Allah SWT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
