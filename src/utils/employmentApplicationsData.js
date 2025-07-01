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
        name: "store1.jpg",
        url: imageUrlMap["store1.jpg"] || "",
      },
      commerce_register: {
        name: "register1.jpg",
        url: imageUrlMap["register1.jpg"] || "",
      },
      id_card: {
        name: "id1.jpg",
        url: imageUrlMap["id1.jpg"] || "",
      },
    },
    {
      id: 2,
      employment_post: 1,
      relay_point_name: "نقطة ترحيل بديلة",
      address: "حي آخر، الجزائر العاصمة",
      wilaya: { code: "16", name: "الجزائر العاصمة" },
      opening_hours: "10:00 - 18:00",
      contact_phone: "+213 555 654 321",
      motivation: "لدي محل مناسب وأرغب في الانضمام.",
      status: "PENDING",
      applied_at: new Date().toISOString(),
      store_image: {
        name: "store2.jpg",
        url: imageUrlMap["store2.jpg"] || "",
      },
      commerce_register: {
        name: "register2.jpg",
        url: imageUrlMap["register2.jpg"] || "",
      },
      id_card: {
        name: "id2.jpg",
        url: imageUrlMap["id2.jpg"] || "",
      },
    },
  ];
}
