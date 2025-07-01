export function getEmploymentApplications(imageUrlMap) {
  return [
    {
      id: 1,
      employment_post: 1,
      relay_point_name: "نقطة ترحيل العاصمة",
      address: "شارع ديدوش مراد، الجزائر العاصمة",
      wilaya: { code: "16", name: "الجزائر العاصمة" },
      opening_hours: "09:00 - 19:00",
      contact_phone: "+213 555 123 456",
      motivation: "أرغب في تشغيل نقطة الترحيل لخبرتي في المجال.",
      status: "PENDING",
      applied_at: new Date().toISOString(),
      store_image: {
        name: "garage.jpg",
        url: imageUrlMap["garage.jpg"] || "",
      },
      commerce_register: {
        name: "register.webp",
        url: imageUrlMap["register.webp"] || "",
      },
      id_card: {
        name: "profile.jpg",
        url: imageUrlMap["profile.jpg"] || "",
      },
    },
  ];
}
