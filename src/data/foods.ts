import { FoodItem } from '../types/food';

export const foods: FoodItem[] = [
  {
    "id": "apple",
    "name": "แอปเปิ้ล (เขียว/แดง)",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🍎",
    "imageUrl": "/images/foods/apple.jpg",
    "imageCredit": "Photo by Tom Hermans on Unsplash (CC0/Free License)",
    "tags": [
      "โพแทสเซียมต่ำ",
      "กากใยสูง",
      "มีเพคติน"
    ],
    "keywords": [
      "แอปเปิ้ล",
      "apple",
      "ผลไม้",
      "ผลไม้โพแทสเซียมต่ำ",
      "ของว่าง",
      "ของหวาน"
    ],
    "diseases": {
      "ckd": {
        "reason": "โพแทสเซียมต่ำมาก (ประมาณ 100-120 มก./ผล) มีสารเพคตินช่วยลดระดับคอเลสเตอรอลในเลือด ปลอดภัยต่อไตทุกระยะ",
        "tags": [
          "โพแทสเซียมต่ำ",
          "กากใยสูง",
          "มีเพคติน"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามปกติ 1-2 ผล/วัน"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานได้วันละ 1 ผลขนาดกลาง"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ทานได้วันละ 1/2 - 1 ผล ควรปอกเปลือก"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้วันละ 1/2 - 1 ผล ระวังเรื่องน้ำในผลไม้"
          }
        }
      }
    },
    "reason": "โพแทสเซียมต่ำมาก (ประมาณ 100-120 มก./ผล) มีสารเพคตินช่วยลดระดับคอเลสเตอรอลในเลือด ปลอดภัยต่อไตทุกระยะ",
    "advice": "รับประทานวันละ 1/2 ถึง 1 ผล ปอกเปลือกออกจะช่วยลดโพแทสเซียมลงได้อีกขั้น",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามปกติ 1-2 ผล/วัน"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานได้วันละ 1 ผลขนาดกลาง"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ทานได้วันละ 1/2 - 1 ผล ควรปอกเปลือก"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้วันละ 1/2 - 1 ผล ระวังเรื่องน้ำในผลไม้"
      }
    }
  },
  {
    "id": "rose-apple",
    "name": "ชมพู่",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🍐",
    "imageUrl": "/images/foods/rose-apple.jpg",
    "imageCredit": "Wikimedia Commons (CC BY-SA 3.0)",
    "tags": [
      "โพแทสเซียมต่ำ",
      "น้ำตาลน้อย",
      "สดชื่น"
    ],
    "keywords": [
      "ชมพู่",
      "ผลไม้",
      "ผลไม้ไทย",
      "ผลไม้โพแทสเซียมต่ำ",
      "ของว่าง"
    ],
    "diseases": {
      "ckd": {
        "reason": "ผลไม้โพแทสเซียมต่ำมาก เนื้อกรอบฉ่ำน้ำ ไม่เพิ่มภาระขับโพแทสเซียมให้ไต",
        "tags": [
          "โพแทสเซียมต่ำ",
          "น้ำตาลน้อย",
          "สดชื่น"
        ],
        "sources": [
          {
            "name": "ฝ่ายโภชนาการ โรงพยาบาลรามาธิบดี",
            "url": "https://www.rama.mahidol.ac.th/ramachannel/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามชอบ 3-4 ผล"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานได้มื้อละ 2-3 ผล"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ทานได้ครั้งละ 1-2 ผล"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้ 1-2 ผล (นับรวมในโควตาน้ำดื่มประจำวัน)"
          }
        }
      }
    },
    "reason": "ผลไม้โพแทสเซียมต่ำมาก เนื้อกรอบฉ่ำน้ำ ไม่เพิ่มภาระขับโพแทสเซียมให้ไต",
    "advice": "ทานครั้งละ 2-3 ผล (หากบวมน้ำหรือฟอกไตให้ระวังปริมาณน้ำในเนื้อชมพู่)",
    "source": {
      "name": "ฝ่ายโภชนาการ โรงพยาบาลรามาธิบดี",
      "url": "https://www.rama.mahidol.ac.th/ramachannel/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามชอบ 3-4 ผล"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานได้มื้อละ 2-3 ผล"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ทานได้ครั้งละ 1-2 ผล"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้ 1-2 ผล (นับรวมในโควตาน้ำดื่มประจำวัน)"
      }
    }
  },
  {
    "id": "pineapple",
    "name": "สับปะรด",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🍍",
    "imageUrl": "/images/foods/pineapple.jpg",
    "imageCredit": "Photo by Pineapple Supply Co. on Unsplash (CC0/Free License)",
    "tags": [
      "โพแทสเซียมต่ำ",
      "เอนไซม์ย่อยโปรตีน"
    ],
    "keywords": [
      "สับปะรด",
      "ผลไม้",
      "ผลไม้เปรี้ยว",
      "ของหวาน"
    ],
    "diseases": {
      "ckd": {
        "reason": "มีโพแทสเซียมต่ำเมื่อเทียบกับผลไม้รสหวานอื่น และมีเอนไซม์โบรมีเลนช่วยย่อยอาหาร",
        "tags": [
          "โพแทสเซียมต่ำ",
          "เอนไซม์ย่อยโปรตีน"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (NKF)",
            "url": "https://www.kidney.org/atoz/content/kidney-friendly-fruits"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ 6-8 ชิ้นคำ"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานได้ 4-6 ชิ้นคำ"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ทานได้ 3-4 ชิ้นคำพอดี"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้ 4 ชิ้นคำ"
          }
        }
      }
    },
    "reason": "มีโพแทสเซียมต่ำเมื่อเทียบกับผลไม้รสหวานอื่น และมีเอนไซม์โบรมีเลนช่วยย่อยอาหาร",
    "advice": "ทานครั้งละ 4-6 ชิ้นพอดีคำ เลี่ยงสับปะรดกระป๋องในน้ำเชื่อม",
    "source": {
      "name": "National Kidney Foundation (NKF)",
      "url": "https://www.kidney.org/atoz/content/kidney-friendly-fruits"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ 6-8 ชิ้นคำ"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานได้ 4-6 ชิ้นคำ"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ทานได้ 3-4 ชิ้นคำพอดี"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้ 4 ชิ้นคำ"
      }
    }
  },
  {
    "id": "guava",
    "name": "ฝรั่ง",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🍈",
    "imageUrl": "/images/foods/guava.jpg",
    "imageCredit": "Photo by Midori on Wikimedia Commons (CC BY-SA 3.0)",
    "tags": [
      "โพแทสเซียมปานกลาง",
      "วิตามินซีสูง"
    ],
    "keywords": [
      "ฝรั่ง",
      "ผลไม้",
      "วิตามินซี",
      "ของว่าง"
    ],
    "diseases": {
      "ckd": {
        "reason": "มีวิตามินซีสูงมาก แต่มีโพแทสเซียมในระดับปานกลางค่อนข้างสูง (ประมาณ 180-250 มก./100 กรัม)",
        "tags": [
          "โพแทสเซียมปานกลาง",
          "วิตามินซีสูง"
        ],
        "sources": [
          {
            "name": "คณะแพทยศาสตร์ศิริราชพยาบาล",
            "url": "https://www.si.mahidol.ac.th/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ 1/2 ถึง 1 ผล"
          },
          "stage3": {
            "level": "caution",
            "advice": "คุมปริมาณครั้งละ 1/3 - 1/2 ผล สัปดาห์ละ 2-3 ครั้ง"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง เพราะโพแทสเซียมสะสมไวมากในระยะนี้"
          },
          "dialysis": {
            "level": "caution",
            "advice": "ทานได้นานๆ ครั้ง ครั้งละ 2-3 ชิ้นคำ"
          }
        }
      }
    },
    "reason": "มีวิตามินซีสูงมาก แต่มีโพแทสเซียมในระดับปานกลางค่อนข้างสูง (ประมาณ 180-250 มก./100 กรัม)",
    "advice": "ทานครั้งละ 1/4 - 1/2 ลูก ไม่จิ้มพริกเกลือ",
    "source": {
      "name": "คณะแพทยศาสตร์ศิริราชพยาบาล",
      "url": "https://www.si.mahidol.ac.th/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ 1/2 ถึง 1 ผล"
      },
      "stage3": {
        "level": "caution",
        "advice": "คุมปริมาณครั้งละ 1/3 - 1/2 ผล สัปดาห์ละ 2-3 ครั้ง"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง เพราะโพแทสเซียมสะสมไวมากในระยะนี้"
      },
      "dialysis": {
        "level": "caution",
        "advice": "ทานได้นานๆ ครั้ง ครั้งละ 2-3 ชิ้นคำ"
      }
    }
  },
  {
    "id": "papaya",
    "name": "มะละกอสุก",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🥭",
    "imageUrl": "/images/foods/papaya.jpg",
    "imageCredit": "Photo by Unsplash (CC0/Free License)",
    "tags": [
      "โพแทสเซียมปานกลาง",
      "ช่วยระบาย"
    ],
    "keywords": [
      "มะละกอ",
      "มะละกอสุก",
      "ผลไม้"
    ],
    "diseases": {
      "ckd": {
        "reason": "ช่วยการขับถ่าย แต่มีโพแทสเซียมปานกลาง หากทานมากระดับโพแทสเซียมในเลือดจะสูงขึ้น",
        "tags": [
          "โพแทสเซียมปานกลาง",
          "ช่วยระบาย"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลรามาธิบดี",
            "url": "https://www.rama.mahidol.ac.th/ramachannel/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ 6-8 ชิ้นคำ"
          },
          "stage3": {
            "level": "caution",
            "advice": "จำกัด 4-5 ชิ้นคำ"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "จำกัด 3-4 ชิ้นคำ หรือเลี่ยงหากโพแทสเซียมในเลือดเกิน 5.0"
          },
          "dialysis": {
            "level": "caution",
            "advice": "จำกัด 3-4 ชิ้นคำ"
          }
        }
      }
    },
    "reason": "ช่วยการขับถ่าย แต่มีโพแทสเซียมปานกลาง หากทานมากระดับโพแทสเซียมในเลือดจะสูงขึ้น",
    "advice": "ทานครั้งละไม่เกิน 4-5 ชิ้นคำพอดี",
    "source": {
      "name": "โรงพยาบาลรามาธิบดี",
      "url": "https://www.rama.mahidol.ac.th/ramachannel/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ 6-8 ชิ้นคำ"
      },
      "stage3": {
        "level": "caution",
        "advice": "จำกัด 4-5 ชิ้นคำ"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "จำกัด 3-4 ชิ้นคำ หรือเลี่ยงหากโพแทสเซียมในเลือดเกิน 5.0"
      },
      "dialysis": {
        "level": "caution",
        "advice": "จำกัด 3-4 ชิ้นคำ"
      }
    }
  },
  {
    "id": "starfruit",
    "name": "มะเฟือง (อันตรายถึงชีวิต!)",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "⭐",
    "imageUrl": "/images/foods/starfruit.jpg",
    "imageCredit": "Wikimedia Commons (CC BY-SA 3.0)",
    "tags": [
      "สารพิษ Caramboxin",
      "ออกซาเลตสูงจัด",
      "ห้ามเด็ดขาดทุกระยะ"
    ],
    "keywords": [
      "มะเฟือง",
      "น้ำมะเฟือง",
      "ผลไม้",
      "สารพิษ",
      "ห้ามกิน"
    ],
    "diseases": {
      "ckd": {
        "reason": "มีสารพิษต่อระบบประสาทชื่อ Caramboxin ไตที่เสื่อมจะไม่สามารถขับออกได้ ทำให้สะอึกรุนแรง ชัก โคม่า ไตวายเฉียบพลัน และเสียชีวิตได้",
        "tags": [
          "สารพิษ Caramboxin",
          "ออกซาเลตสูงจัด",
          "ห้ามเด็ดขาดทุกระยะ"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย (ประกาศเตือนภัยมะเฟือง)",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด"
          },
          "stage3": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "อันตรายถึงชีวิต! ห้ามรับประทานเด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "อันตรายถึงชีวิต! ห้ามรับประทานเด็ดขาด"
          }
        }
      }
    },
    "reason": "มีสารพิษต่อระบบประสาทชื่อ Caramboxin ไตที่เสื่อมจะไม่สามารถขับออกได้ ทำให้สะอึกรุนแรง ชัก โคม่า ไตวายเฉียบพลัน และเสียชีวิตได้",
    "advice": "❌ ห้ามรับประทานเด็ดขาดทุกระยะ ไม่ว่าจะสด คั้นน้ำ หรือแปรรูป",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย (ประกาศเตือนภัยมะเฟือง)",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "danger",
        "advice": "ห้ามรับประทานเด็ดขาด"
      },
      "stage3": {
        "level": "danger",
        "advice": "ห้ามรับประทานเด็ดขาด"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "อันตรายถึงชีวิต! ห้ามรับประทานเด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "อันตรายถึงชีวิต! ห้ามรับประทานเด็ดขาด"
      }
    }
  },
  {
    "id": "banana",
    "name": "กล้วยทุกชนิด (กล้วยหอม, น้ำว้า, ไข่)",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🍌",
    "imageUrl": "/images/foods/banana.jpg",
    "imageCredit": "Photo by Rodrigo dos Reis on Unsplash (CC0/Free License)",
    "tags": [
      "โพแทสเซียมสูงมาก",
      "เสี่ยงหัวใจเต้นผิดจังหวะ"
    ],
    "keywords": [
      "กล้วย",
      "กล้วยหอม",
      "กล้วยน้ำว้า",
      "กล้วยไข่",
      "ผลไม้"
    ],
    "diseases": {
      "ckd": {
        "reason": "กล้วยมีโพแทสเซียมสูงมาก (350-450 มก./100g) ทำให้โพแทสเซียมในเลือดพุ่งสูง เสี่ยงต่อภาวะหัวใจเต้นผิดจังหวะหรือหัวใจวาย",
        "tags": [
          "โพแทสเซียมสูงมาก",
          "เสี่ยงหัวใจเต้นผิดจังหวะ"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ทานได้วันละ 1 ลูก (หากผลเลือดปกติ)"
          },
          "stage3": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง หรือทานไม่เกิน 1/2 ลูกนานๆ ครั้ง"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "งดเด็ดขาด โพแทสเซียมสูงจัด เสี่ยงหัวใจวาย"
          },
          "dialysis": {
            "level": "danger",
            "advice": "งดเด็ดขาด โพแทสเซียมสะสมไวมากระหว่างรอบฟอก"
          }
        }
      }
    },
    "reason": "กล้วยมีโพแทสเซียมสูงมาก (350-450 มก./100g) ทำให้โพแทสเซียมในเลือดพุ่งสูง เสี่ยงต่อภาวะหัวใจเต้นผิดจังหวะหรือหัวใจวาย",
    "advice": "ควรหลีกเลี่ยงในระยะไตเสื่อมปานกลางถึงรุนแรง",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ทานได้วันละ 1 ลูก (หากผลเลือดปกติ)"
      },
      "stage3": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง หรือทานไม่เกิน 1/2 ลูกนานๆ ครั้ง"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "งดเด็ดขาด โพแทสเซียมสูงจัด เสี่ยงหัวใจวาย"
      },
      "dialysis": {
        "level": "danger",
        "advice": "งดเด็ดขาด โพแทสเซียมสะสมไวมากระหว่างรอบฟอก"
      }
    }
  },
  {
    "id": "durian",
    "name": "ทุเรียน",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🍈",
    "imageUrl": "/images/foods/durian.jpg",
    "imageCredit": "Photo by Hafiz Issadeen on Wikimedia Commons (CC BY-SA 4.0)",
    "tags": [
      "โพแทสเซียมสูงลิ่ว",
      "ฟอสฟอรัสสูง",
      "น้ำตาลสูง"
    ],
    "keywords": [
      "ทุเรียน",
      "ผลไม้",
      "ทุเรียนกวน",
      "ผลไม้หวานจัด"
    ],
    "diseases": {
      "ckd": {
        "reason": "อุดมด้วยโพแทสเซียม ฟอสฟอรัส และพลังงานเข้มข้น ไตขับไม่ทันอย่างแน่นอน",
        "tags": [
          "โพแทสเซียมสูงลิ่ว",
          "ฟอสฟอรัสสูง",
          "น้ำตาลสูง"
        ],
        "sources": [
          {
            "name": "กรมอนามัย กระทรวงสาธารณสุข",
            "url": "https://multimedia.anamai.moph.go.th/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ทานได้ไม่เกิน 1 เม็ดเล็กนานๆ ครั้ง"
          },
          "stage3": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยงเด็ดขาด"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด"
          }
        }
      }
    },
    "reason": "อุดมด้วยโพแทสเซียม ฟอสฟอรัส และพลังงานเข้มข้น ไตขับไม่ทันอย่างแน่นอน",
    "advice": "งดรับประทานเด็ดขาดสำหรับผู้ป่วยโรคไต",
    "source": {
      "name": "กรมอนามัย กระทรวงสาธารณสุข",
      "url": "https://multimedia.anamai.moph.go.th/"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ทานได้ไม่เกิน 1 เม็ดเล็กนานๆ ครั้ง"
      },
      "stage3": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยงเด็ดขาด"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ห้ามรับประทานเด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ห้ามรับประทานเด็ดขาด"
      }
    }
  },
  {
    "id": "orange",
    "name": "ส้ม / น้ำส้มคั้น",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🍊",
    "imageUrl": "/images/foods/orange.jpg",
    "imageCredit": "Photo by Mae Mu on Unsplash (CC0/Free License)",
    "tags": [
      "โพแทสเซียมสูงมาก",
      "กรดซิตริก"
    ],
    "keywords": [
      "ส้ม",
      "น้ำส้ม",
      "ส้มเขียวหวาน",
      "ส้มโอ",
      "ผลไม้"
    ],
    "diseases": {
      "ckd": {
        "reason": "ส้มและน้ำส้มมีโพแทสเซียมสูงจัด โดยเฉพาะน้ำส้มคั้น 1 แก้วเทียบเท่าส้ม 3-4 ผล ทำให้โพแทสเซียมในเลือดพุ่งขึ้นอย่างรวดเร็ว",
        "tags": [
          "โพแทสเซียมสูงมาก",
          "กรดซิตริก"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานผลสดได้วันละ 1 ผล เลี่ยงน้ำส้มคั้น"
          },
          "stage3": {
            "level": "caution",
            "advice": "ทานได้ไม่เกิน 1 ผลเล็ก งดน้ำส้มคั้น"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด โพแทสเซียมสูงเกินไตขับ"
          },
          "dialysis": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด เสี่ยงหัวใจเต้นผิดจังหวะ"
          }
        }
      }
    },
    "reason": "ส้มและน้ำส้มมีโพแทสเซียมสูงจัด โดยเฉพาะน้ำส้มคั้น 1 แก้วเทียบเท่าส้ม 3-4 ผล ทำให้โพแทสเซียมในเลือดพุ่งขึ้นอย่างรวดเร็ว",
    "advice": "หลีกเลี่ยงน้ำส้มคั้น หากอยากทานส้มสดให้ทานไม่เกิน 1 ผลเล็กในระยะแรก",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานผลสดได้วันละ 1 ผล เลี่ยงน้ำส้มคั้น"
      },
      "stage3": {
        "level": "caution",
        "advice": "ทานได้ไม่เกิน 1 ผลเล็ก งดน้ำส้มคั้น"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด โพแทสเซียมสูงเกินไตขับ"
      },
      "dialysis": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด เสี่ยงหัวใจเต้นผิดจังหวะ"
      }
    }
  },
  {
    "id": "cabbage",
    "name": "กะหล่ำปลี",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🥬",
    "tags": [
      "โพแทสเซียมต่ำมาก",
      "ไฟเบอร์สูง",
      "ปลอดภัยสูงสุด"
    ],
    "keywords": [
      "กะหล่ำปลี",
      "ผัก",
      "ผักกะหล่ำ",
      "ผักใบขาว",
      "โพแทสเซียมต่ำ"
    ],
    "diseases": {
      "ckd": {
        "reason": "เป็นผักสีขาว/อ่อนที่มีโพแทสเซียมต่ำมาก โซเดียมต่ำ และมีวิตามิน C, K เหมาะกับโรคไตทุกระยะ",
        "tags": [
          "โพแทสเซียมต่ำมาก",
          "ไฟเบอร์สูง",
          "ปลอดภัยสูงสุด"
        ],
        "sources": [
          {
            "name": "American Kidney Fund",
            "url": "https://www.kidneyfund.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามสบาย"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานได้ดี เหมาะเป็นผักประจำวัน"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ปลอดภัย แนะนำลวกน้ำทิ้งก่อนปรุง"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ปลอดภัย แนะนำลวกน้ำทิ้งก่อน"
          }
        }
      }
    },
    "reason": "เป็นผักสีขาว/อ่อนที่มีโพแทสเซียมต่ำมาก โซเดียมต่ำ และมีวิตามิน C, K เหมาะกับโรคไตทุกระยะ",
    "advice": "ทานได้ทั้งผัด ต้ม หรือลวก การนำไปลวกน้ำเดือดแล้วเทน้ำทิ้งจะลดโพแทสเซียมลงได้อีก",
    "source": {
      "name": "American Kidney Fund",
      "url": "https://www.kidneyfund.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามสบาย"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานได้ดี เหมาะเป็นผักประจำวัน"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ปลอดภัย แนะนำลวกน้ำทิ้งก่อนปรุง"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ปลอดภัย แนะนำลวกน้ำทิ้งก่อน"
      }
    }
  },
  {
    "id": "chinese-cabbage",
    "name": "ผักกาดขาว",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🥬",
    "tags": [
      "โพแทสเซียมต่ำ",
      "ย่อยง่าย",
      "น้ำเยอะ"
    ],
    "keywords": [
      "ผักกาดขาว",
      "ผัก",
      "ต้มจืด",
      "โพแทสเซียมต่ำ",
      "ผักใบอ่อน"
    ],
    "diseases": {
      "ckd": {
        "reason": "ผักสีซีดโพแทสเซียมต่ำ ย่อยง่าย อ่อนโยนต่อทางเดินอาหารและไต",
        "tags": [
          "โพแทสเซียมต่ำ",
          "ย่อยง่าย",
          "น้ำเยอะ"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามปกติ"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานได้ดีทุกวัน"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ทานได้ ปรุงสุกน้ำใส"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้ดี"
          }
        }
      }
    },
    "reason": "ผักสีซีดโพแทสเซียมต่ำ ย่อยง่าย อ่อนโยนต่อทางเดินอาหารและไต",
    "advice": "เหมาะสำหรับทำแกงจืด ต้มจืด หรือผัดผักน้ำมันน้อย",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามปกติ"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานได้ดีทุกวัน"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ทานได้ ปรุงสุกน้ำใส"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้ดี"
      }
    }
  },
  {
    "id": "cucumber",
    "name": "แตงกวา / แตงร้าน",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🥒",
    "tags": [
      "โพแทสเซียมต่ำ",
      "สดชื่น"
    ],
    "keywords": [
      "แตงกวา",
      "แตงร้าน",
      "ผัก",
      "ผักสลัด",
      "แตง"
    ],
    "diseases": {
      "ckd": {
        "reason": "โพแทสเซียมและฟอสฟอรัสต่ำมาก ปลอดภัยสูง",
        "tags": [
          "โพแทสเซียมต่ำ",
          "สดชื่น"
        ],
        "sources": [
          {
            "name": "กรมอนามัย กระทรวงสาธารณสุข",
            "url": "https://multimedia.anamai.moph.go.th/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานสดหรือผัดได้ตามชอบ"
          },
          "stage3": {
            "level": "safe",
            "advice": "ปอกเปลือกแล้วทานได้"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ปอกเปลือกและทานแต่พอเหมาะ"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ปอกเปลือก (ระวังเรื่องน้ำถ้ามีอาการบวม)"
          }
        }
      }
    },
    "reason": "โพแทสเซียมและฟอสฟอรัสต่ำมาก ปลอดภัยสูง",
    "advice": "ปอกเปลือกก่อนรับประทานเพื่อลดโพแทสเซียมที่ผิวเปลือก",
    "source": {
      "name": "กรมอนามัย กระทรวงสาธารณสุข",
      "url": "https://multimedia.anamai.moph.go.th/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานสดหรือผัดได้ตามชอบ"
      },
      "stage3": {
        "level": "safe",
        "advice": "ปอกเปลือกแล้วทานได้"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ปอกเปลือกและทานแต่พอเหมาะ"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ปอกเปลือก (ระวังเรื่องน้ำถ้ามีอาการบวม)"
      }
    }
  },
  {
    "id": "carrot",
    "name": "แครอท",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🥕",
    "tags": [
      "โพแทสเซียมปานกลาง",
      "เบต้าแคโรทีน"
    ],
    "keywords": [
      "แครอท",
      "ผัก",
      "ผักสีส้ม",
      "ต้มซุป"
    ],
    "diseases": {
      "ckd": {
        "reason": "แครอทดิบมีโพแทสเซียมระดับปานกลางค่อนข้างสูง แต่สามารถลดลงได้ด้วยการหั่นต้มน้ำทิ้ง",
        "tags": [
          "โพแทสเซียมปานกลาง",
          "เบต้าแคโรทีน"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation",
            "url": "https://www.kidney.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามปกติ"
          },
          "stage3": {
            "level": "caution",
            "advice": "ต้มลวกน้ำทิ้งก่อนรับประทาน"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "จำกัดปริมาณ ต้องต้มน้ำทิ้งเท่านั้น"
          },
          "dialysis": {
            "level": "caution",
            "advice": "จำกัดปริมาณ ต้มน้ำทิ้ง"
          }
        }
      }
    },
    "reason": "แครอทดิบมีโพแทสเซียมระดับปานกลางค่อนข้างสูง แต่สามารถลดลงได้ด้วยการหั่นต้มน้ำทิ้ง",
    "advice": "หั่นเป็นลูกเต๋า ต้มในน้ำเดือด 10 นาทีแล้วเทน้ำทิ้งก่อนนำไปปรุงอาหาร",
    "source": {
      "name": "National Kidney Foundation",
      "url": "https://www.kidney.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามปกติ"
      },
      "stage3": {
        "level": "caution",
        "advice": "ต้มลวกน้ำทิ้งก่อนรับประทาน"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "จำกัดปริมาณ ต้องต้มน้ำทิ้งเท่านั้น"
      },
      "dialysis": {
        "level": "caution",
        "advice": "จำกัดปริมาณ ต้มน้ำทิ้ง"
      }
    }
  },
  {
    "id": "spinach-tamlueng",
    "name": "ผักโขม / ตำลึง / ผักคะน้า / บรอกโคลี",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🌿",
    "tags": [
      "โพแทสเซียมสูงมาก",
      "ออกซาเลตสูง"
    ],
    "keywords": [
      "ตำลึง",
      "ผักโขม",
      "คะน้า",
      "บรอกโคลี",
      "ผักใบเขียวเข้ม",
      "ผัก"
    ],
    "diseases": {
      "ckd": {
        "reason": "ผักใบเขียวเข้มมีโพแทสเซียมสูงมาก เมื่อทำให้สุกและยุบตัวจะได้รับโพแทสเซียมปริมาณมหาศาล",
        "tags": [
          "โพแทสเซียมสูงมาก",
          "ออกซาเลตสูง"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ปกติ แต่ต้มลวกดีกว่าทานสด"
          },
          "stage3": {
            "level": "caution",
            "advice": "เลี่ยงทานบ่อย หรือต้องต้มน้ำทิ้งอย่างน้อย 2 ครั้ง"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด เสี่ยงหัวใจเต้นผิดจังหวะ"
          },
          "dialysis": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          }
        }
      }
    },
    "reason": "ผักใบเขียวเข้มมีโพแทสเซียมสูงมาก เมื่อทำให้สุกและยุบตัวจะได้รับโพแทสเซียมปริมาณมหาศาล",
    "advice": "เปลี่ยนมาใช้ผักกาดขาวหรือกะหล่ำปลีแทน",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ปกติ แต่ต้มลวกดีกว่าทานสด"
      },
      "stage3": {
        "level": "caution",
        "advice": "เลี่ยงทานบ่อย หรือต้องต้มน้ำทิ้งอย่างน้อย 2 ครั้ง"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด เสี่ยงหัวใจเต้นผิดจังหวะ"
      },
      "dialysis": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      }
    }
  },
  {
    "id": "pumpkin",
    "name": "ฟักทอง",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🎃",
    "tags": [
      "โพแทสเซียมสูงมาก",
      "คาร์โบไฮเดรต"
    ],
    "keywords": [
      "ฟักทอง",
      "ผัก",
      "ขนมไทย",
      "แกงบวด"
    ],
    "diseases": {
      "ckd": {
        "reason": "มีโพแทสเซียมสูงมาก แม้จะต้มแล้วก็ยังมีความเข้มข้นสูงในเนื้อ",
        "tags": [
          "โพแทสเซียมสูงมาก",
          "คาร์โบไฮเดรต"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลรามาธิบดี",
            "url": "https://www.rama.mahidol.ac.th/ramachannel/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้พอเหมาะ"
          },
          "stage3": {
            "level": "caution",
            "advice": "ทานได้แต่น้อย ครั้งละ 1-2 ชิ้นเล็ก"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          }
        }
      }
    },
    "reason": "มีโพแทสเซียมสูงมาก แม้จะต้มแล้วก็ยังมีความเข้มข้นสูงในเนื้อ",
    "advice": "ควรหลีกเลี่ยงทั้งในอาหารคาวและของหวานไทย (แกงบวด, สังขยา)",
    "source": {
      "name": "โรงพยาบาลรามาธิบดี",
      "url": "https://www.rama.mahidol.ac.th/ramachannel/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้พอเหมาะ"
      },
      "stage3": {
        "level": "caution",
        "advice": "ทานได้แต่น้อย ครั้งละ 1-2 ชิ้นเล็ก"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      }
    }
  },
  {
    "id": "tomato",
    "name": "มะเขือเทศ / ซอสมะเขือเทศ",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🍅",
    "tags": [
      "โพแทสเซียมสูงจัด",
      "ไลโคปีน"
    ],
    "keywords": [
      "มะเขือเทศ",
      "ซอสมะเขือเทศ",
      "ผัก",
      "สลัด"
    ],
    "diseases": {
      "ckd": {
        "reason": "มะเขือเทศสดและซอสมะเขือเทศเข้มข้นมีโพแทสเซียมสูงมาก ซอสและน้ำพริกอ่องมักทำให้โพแทสเซียมพุ่งขึ้นสูง",
        "tags": [
          "โพแทสเซียมสูงจัด",
          "ไลโคปีน"
        ],
        "sources": [
          {
            "name": "American Kidney Fund",
            "url": "https://www.kidneyfund.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานผลสดได้ 1 ลูกกลาง"
          },
          "stage3": {
            "level": "caution",
            "advice": "จำกัดปริมาณ เลี่ยงซอสมะเขือเทศเข้มข้น"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          }
        }
      }
    },
    "reason": "มะเขือเทศสดและซอสมะเขือเทศเข้มข้นมีโพแทสเซียมสูงมาก ซอสและน้ำพริกอ่องมักทำให้โพแทสเซียมพุ่งขึ้นสูง",
    "advice": "หากต้องการทานสด ให้เลือกมะเขือเทศลูกเล็กไม่เกิน 1-2 ลูก หรือหลีกเลี่ยงในระยะท้าย",
    "source": {
      "name": "American Kidney Fund",
      "url": "https://www.kidneyfund.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานผลสดได้ 1 ลูกกลาง"
      },
      "stage3": {
        "level": "caution",
        "advice": "จำกัดปริมาณ เลี่ยงซอสมะเขือเทศเข้มข้น"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      }
    }
  },
  {
    "id": "egg-white",
    "name": "ไข่ขาว (สุก)",
    "category": "protein",
    "categoryName": "เนื้อสัตว์/โปรตีน",
    "icon": "🥚",
    "tags": [
      "โปรตีนบริสุทธิ์",
      "ฟอสฟอรัสต่ำมาก",
      "ของเสียยูเรียต่ำ"
    ],
    "keywords": [
      "ไข่ขาว",
      "ไข่",
      "โปรตีน",
      "กล้ามเนื้อ",
      "อาหารเสริมโปรตีน"
    ],
    "diseases": {
      "ckd": {
        "reason": "ไข่ขาวคือโปรตีนคุณภาพสูงสุด (High Biological Value) มีฟอสฟอรัสต่ำมาก ร่างกายดูดซึมซ่อมแซมได้หมด สร้างของเสียน้อยที่สุด",
        "tags": [
          "โปรตีนบริสุทธิ์",
          "ฟอสฟอรัสต่ำมาก",
          "ของเสียยูเรียต่ำ"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ปกติ 2-3 ฟอง/วัน"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานวันละ 2-3 ฟอง ทดแทนเนื้อสัตว์ติดมัน"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ดีที่สุด! ทานวันละ 2-3 ฟอง (คำนวณตามน้ำหนักตัวเพื่อไม่ให้โปรตีนรวมเกินเกณฑ์)"
          },
          "dialysis": {
            "level": "safe",
            "advice": "🌟 จำเป็นมาก! แนะนำทานวันละ 4-6 ฟอง เพื่อชดเชยโปรตีนที่สูญเสียจากการฟอกไต"
          }
        }
      }
    },
    "reason": "ไข่ขาวคือโปรตีนคุณภาพสูงสุด (High Biological Value) มีฟอสฟอรัสต่ำมาก ร่างกายดูดซึมซ่อมแซมได้หมด สร้างของเสียน้อยที่สุด",
    "advice": "ไข่ต้ม ไข่ตุ๋นน้ำ หรือไข่ดาวน้ำ (ไม่ทอดน้ำมันท่วม)",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ปกติ 2-3 ฟอง/วัน"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานวันละ 2-3 ฟอง ทดแทนเนื้อสัตว์ติดมัน"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ดีที่สุด! ทานวันละ 2-3 ฟอง (คำนวณตามน้ำหนักตัวเพื่อไม่ให้โปรตีนรวมเกินเกณฑ์)"
      },
      "dialysis": {
        "level": "safe",
        "advice": "🌟 จำเป็นมาก! แนะนำทานวันละ 4-6 ฟอง เพื่อชดเชยโปรตีนที่สูญเสียจากการฟอกไต"
      }
    }
  },
  {
    "id": "white-fish",
    "name": "ปลาน้ำจืดเนื้อขาว (ปลากะพง, ปลานิล, ปลาช่อน)",
    "category": "protein",
    "categoryName": "เนื้อสัตว์/โปรตีน",
    "icon": "🐟",
    "tags": [
      "โปรตีนย่อยง่าย",
      "ฟอสฟอรัสน้อยกว่าเนื้อแดง",
      "ไขมันต่ำ"
    ],
    "keywords": [
      "ปลา",
      "ปลาน้ำจืด",
      "ปลานิล",
      "ปลากะพง",
      "ปลาช่อน",
      "เนื้อปลา",
      "โปรตีน"
    ],
    "diseases": {
      "ckd": {
        "reason": "ย่อยง่าย มีพิวรีนและฟอสฟอรัสน้อยกว่าเนื้อหมูหรือเนื้อวัวติดมัน",
        "tags": [
          "โปรตีนย่อยง่าย",
          "ฟอสฟอรัสน้อยกว่าเนื้อแดง",
          "ไขมันต่ำ"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลศิริราช",
            "url": "https://www.si.mahidol.ac.th/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามชอบ"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานมื้อละ 2-3 ช้อนโต๊ะ"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ทานมื้อละ 2-3 ช้อนโต๊ะ (ควบคุมน้ำหนักชิ้นเนื้อตามเกณฑ์แพทย์)"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้เต็มที่ มื้อละ 3-4 ช้อนโต๊ะ เพื่อฟื้นฟูกล้ามเนื้อ"
          }
        }
      }
    },
    "reason": "ย่อยง่าย มีพิวรีนและฟอสฟอรัสน้อยกว่าเนื้อหมูหรือเนื้อวัวติดมัน",
    "advice": "นึ่ง ต้ม ลวก หลีกเลี่ยงปลาเค็มหรือปลาแดดเดียวหมักเกลือ",
    "source": {
      "name": "โรงพยาบาลศิริราช",
      "url": "https://www.si.mahidol.ac.th/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามชอบ"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานมื้อละ 2-3 ช้อนโต๊ะ"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ทานมื้อละ 2-3 ช้อนโต๊ะ (ควบคุมน้ำหนักชิ้นเนื้อตามเกณฑ์แพทย์)"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้เต็มที่ มื้อละ 3-4 ช้อนโต๊ะ เพื่อฟื้นฟูกล้ามเนื้อ"
      }
    }
  },
  {
    "id": "chicken-breast",
    "name": "อกไก่ไม่ติดหนัง",
    "category": "protein",
    "categoryName": "เนื้อสัตว์/โปรตีน",
    "icon": "🍗",
    "tags": [
      "โปรตีนไขมันต่ำ",
      "ฟอสฟอรัสปานกลาง"
    ],
    "keywords": [
      "อกไก่",
      "ไก่",
      "เนื้อไก่",
      "โปรตีน"
    ],
    "diseases": {
      "ckd": {
        "reason": "เป็นเนื้อสัตว์ไม่ติดมันที่ย่อยง่าย มีฟอสฟอรัสน้อยกว่าเนื้อแดง แต่ยังต้องคุมปริมาณในระยะก่อนฟอก",
        "tags": [
          "โปรตีนไขมันต่ำ",
          "ฟอสฟอรัสปานกลาง"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้มื้อละ 3-4 ช้อนโต๊ะ"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานมื้อละ 2-3 ช้อนโต๊ะ"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "จำกัดมื้อละ 1-2 ช้อนโต๊ะ สลับกับไข่ขาว"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้มื้อละ 3-4 ช้อนโต๊ะ"
          }
        }
      }
    },
    "reason": "เป็นเนื้อสัตว์ไม่ติดมันที่ย่อยง่าย มีฟอสฟอรัสน้อยกว่าเนื้อแดง แต่ยังต้องคุมปริมาณในระยะก่อนฟอก",
    "advice": "ปรุงด้วยวิธีต้ม นึ่ง ย่าง ไม่หมักซอสเค็มจัด",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้มื้อละ 3-4 ช้อนโต๊ะ"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานมื้อละ 2-3 ช้อนโต๊ะ"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "จำกัดมื้อละ 1-2 ช้อนโต๊ะ สลับกับไข่ขาว"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้มื้อละ 3-4 ช้อนโต๊ะ"
      }
    }
  },
  {
    "id": "egg-yolk",
    "name": "ไข่แดง",
    "category": "protein",
    "categoryName": "เนื้อสัตว์/โปรตีน",
    "icon": "🍳",
    "tags": [
      "ฟอสฟอรัสสูงมาก",
      "คอเลสเตอรอล"
    ],
    "keywords": [
      "ไข่แดง",
      "ไข่",
      "ฟอสฟอรัส",
      "ไข่ดาว",
      "ไข่ต้ม"
    ],
    "diseases": {
      "ckd": {
        "reason": "ไข่แดง 1 ฟองมีฟอสฟอรัสสูง หากไตขับไม่ออก จะสะสมจนดึงแคลเซียมออกจากกระดูก ทำให้คันตามผิวและกระดูกเปราะหักง่าย",
        "tags": [
          "ฟอสฟอรัสสูงมาก",
          "คอเลสเตอรอล"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้วันละ 1 ฟอง"
          },
          "stage3": {
            "level": "caution",
            "advice": "จำกัดสัปดาห์ละ 2-3 ฟอง"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด หรือไม่เกินสัปดาห์ละ 1 ฟอง"
          },
          "dialysis": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด ฟอสฟอรัสในไข่แดงฟอกออกยากมาก"
          }
        }
      }
    },
    "reason": "ไข่แดง 1 ฟองมีฟอสฟอรัสสูง หากไตขับไม่ออก จะสะสมจนดึงแคลเซียมออกจากกระดูก ทำให้คันตามผิวและกระดูกเปราะหักง่าย",
    "advice": "ระยะท้ายควรเน้นทานไข่ขาว และจำกัดหรือเลี่ยงไข่แดง",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้วันละ 1 ฟอง"
      },
      "stage3": {
        "level": "caution",
        "advice": "จำกัดสัปดาห์ละ 2-3 ฟอง"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด หรือไม่เกินสัปดาห์ละ 1 ฟอง"
      },
      "dialysis": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด ฟอสฟอรัสในไข่แดงฟอกออกยากมาก"
      }
    }
  },
  {
    "id": "processed-meat",
    "name": "เนื้อสัตว์แปรรูป (ไส้กรอก, เบคอน, กุนเชียง, หมูยอ, ลูกชิ้น)",
    "category": "protein",
    "categoryName": "เนื้อสัตว์/โปรตีน",
    "icon": "🥓",
    "tags": [
      "ฟอสเฟตสังเคราะห์ (ดูดซึม 100%)",
      "โซเดียมสูงจัด",
      "อันตราย"
    ],
    "keywords": [
      "ไส้กรอก",
      "เบคอน",
      "กุนเชียง",
      "หมูยอ",
      "ลูกชิ้น",
      "เนื้อแปรรูป",
      "แฮม"
    ],
    "diseases": {
      "ckd": {
        "reason": "ผสมสารฟอสเฟตสังเคราะห์ ร่างกายดูดซึมเข้ากระแสเลือดเกือบ 100% ทำให้ฟอสฟอรัสพุ่งสูงทันที และมีโซเดียมมหาศาลเร่งไตวาย",
        "tags": [
          "ฟอสเฟตสังเคราะห์ (ดูดซึม 100%)",
          "โซเดียมสูงจัด",
          "อันตราย"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ควรลดให้น้อยที่สุด มีโซเดียมและฟอสเฟตสูง"
          },
          "stage3": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด"
          }
        }
      }
    },
    "reason": "ผสมสารฟอสเฟตสังเคราะห์ ร่างกายดูดซึมเข้ากระแสเลือดเกือบ 100% ทำให้ฟอสฟอรัสพุ่งสูงทันที และมีโซเดียมมหาศาลเร่งไตวาย",
    "advice": "❌ ควรหลีกเลี่ยงทุกระยะโรค ใช้เนื้อปลาหรือไข่ขาวสดแทน",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ควรลดให้น้อยที่สุด มีโซเดียมและฟอสเฟตสูง"
      },
      "stage3": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ห้ามรับประทานเด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ห้ามรับประทานเด็ดขาด"
      }
    }
  },
  {
    "id": "organ-meat",
    "name": "เครื่องในสัตว์ (ตับ, ไต, ไส้, ปอด)",
    "category": "protein",
    "categoryName": "เนื้อสัตว์/โปรตีน",
    "icon": "🫀",
    "tags": [
      "ฟอสฟอรัสเข้มข้นสูงสุด",
      "กรดยูริกสูงจัด"
    ],
    "keywords": [
      "ตับ",
      "เครื่องใน",
      "เครื่องในสัตว์",
      "ไตไก่",
      "หัวใจ",
      "ไส้หมู"
    ],
    "diseases": {
      "ckd": {
        "reason": "เป็นแหล่งสะสมฟอสฟอรัสและพิวรีนเข้มข้นที่สุด ทำให้ระดับฟอสเฟตในเลือดสูงวิกฤต",
        "tags": [
          "ฟอสฟอรัสเข้มข้นสูงสุด",
          "กรดยูริกสูงจัด"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลรามาธิบดี",
            "url": "https://www.rama.mahidol.ac.th/ramachannel/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ไม่แนะนำ ทานได้ไม่เกินเดือนละครั้ง"
          },
          "stage3": {
            "level": "danger",
            "advice": "งดเด็ดขาด"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "งดเด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "งดเด็ดขาด"
          }
        }
      },
      "gout": {
        "reason": "เครื่องในสัตว์ (ตับ ไต ไส้) มีสารพิวรีนเข้มข้นที่สุดในบรรดาอาหารทั้งหมด ร่างกายจะเปลี่ยนเป็นกรดยูริกปริมาณมหาศาล",
        "tags": [
          "พิวรีนสูงสุด",
          "อันตรายต่อเกาต์"
        ],
        "sources": [
          {
            "name": "สมาคมรูมาติสซั่มแห่งประเทศไทย",
            "url": "https://www.thairheumatology.org/"
          }
        ],
        "stages": {
          "default": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด เป็นตัวกระตุ้นข้ออักเสบอย่างรุนแรง"
          }
        }
      }
    },
    "reason": "เป็นแหล่งสะสมฟอสฟอรัสและพิวรีนเข้มข้นที่สุด ทำให้ระดับฟอสเฟตในเลือดสูงวิกฤต",
    "advice": "งดเว้นเด็ดขาดสำหรับโรคไตทุกระยะ",
    "source": {
      "name": "โรงพยาบาลรามาธิบดี",
      "url": "https://www.rama.mahidol.ac.th/ramachannel/"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ไม่แนะนำ ทานได้ไม่เกินเดือนละครั้ง"
      },
      "stage3": {
        "level": "danger",
        "advice": "งดเด็ดขาด"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "งดเด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "งดเด็ดขาด"
      }
    }
  },
  {
    "id": "glass-noodle",
    "name": "วุ้นเส้น / ก๋วยเตี๋ยวเซี่ยงไฮ้",
    "category": "carb",
    "categoryName": "ข้าว-แป้ง",
    "icon": "🍜",
    "tags": [
      "แป้งปลอดโปรตีน (Protein-Free)",
      "ฟอสฟอรัสต่ำมาก",
      "ให้พลังงานสะอาด"
    ],
    "keywords": [
      "วุ้นเส้น",
      "เส้นเซี่ยงไฮ้",
      "แป้งปลอดโปรตีน",
      "ก๋วยเตี๋ยว",
      "แป้ง"
    ],
    "diseases": {
      "ckd": {
        "reason": "เป็นแป้งปลอดโปรตีน ให้พลังงานแก่ร่างกายโดยไม่สร้างของเสียยูเรีย เหมาะที่สุดสำหรับผู้ป่วยไตที่ต้องจำกัดโปรตีนแต่ต้องการพลังงานไม่ให้น้ำหนักลด",
        "tags": [
          "แป้งปลอดโปรตีน (Protein-Free)",
          "ฟอสฟอรัสต่ำมาก",
          "ให้พลังงานสะอาด"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ดี"
          },
          "stage3": {
            "level": "safe",
            "advice": "แนะนำสลับกับข้าวสวย"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "🌟 ดีเยี่ยม! ทานเป็นพลังงานหลักเพื่อไม่ให้น้ำหนักลดลง"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้ดีร่วมกับไข่ขาว"
          }
        }
      }
    },
    "reason": "เป็นแป้งปลอดโปรตีน ให้พลังงานแก่ร่างกายโดยไม่สร้างของเสียยูเรีย เหมาะที่สุดสำหรับผู้ป่วยไตที่ต้องจำกัดโปรตีนแต่ต้องการพลังงานไม่ให้น้ำหนักลด",
    "advice": "ใช้ทำต้มจืดวุ้นเส้น ยำรสอ่อน หรือผัดวุ้นเส้นใส่ไข่ขาว",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ดี"
      },
      "stage3": {
        "level": "safe",
        "advice": "แนะนำสลับกับข้าวสวย"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "🌟 ดีเยี่ยม! ทานเป็นพลังงานหลักเพื่อไม่ให้น้ำหนักลดลง"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้ดีร่วมกับไข่ขาว"
      }
    }
  },
  {
    "id": "white-rice",
    "name": "ข้าวสวยขัดขาว / เส้นเล็ก / เส้นใหญ่",
    "category": "carb",
    "categoryName": "ข้าว-แป้ง",
    "icon": "🍚",
    "tags": [
      "ฟอสฟอรัสต่ำกว่าข้าวกล้อง",
      "ย่อยง่าย"
    ],
    "keywords": [
      "ข้าวขาว",
      "ข้าวสวย",
      "เส้นเล็ก",
      "เส้นใหญ่",
      "ก๋วยเตี๋ยว",
      "แป้ง"
    ],
    "diseases": {
      "ckd": {
        "reason": "การขัดสีเอาเปลือกออกทำให้ฟอสฟอรัสและโพแทสเซียมลดลงมาก ปลอดภัยต่อไตมากกว่าข้าวกล้อง",
        "tags": [
          "ฟอสฟอรัสต่ำกว่าข้าวกล้อง",
          "ย่อยง่าย"
        ],
        "sources": [
          {
            "name": "ฝ่ายโภชนาการ ศิริราชพยาบาล",
            "url": "https://www.si.mahidol.ac.th/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามปกติ"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานได้มื้อละ 1-2 ทัพพี"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ทานได้มื้อละ 1-2 ทัพพี (ดีกว่าข้าวกล้อง)"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้ตามความต้องการพลังงาน"
          }
        }
      }
    },
    "reason": "การขัดสีเอาเปลือกออกทำให้ฟอสฟอรัสและโพแทสเซียมลดลงมาก ปลอดภัยต่อไตมากกว่าข้าวกล้อง",
    "advice": "ทานมื้อละ 1-2 ทัพพี ตามคำแนะนำปริมาณคาร์โบไฮเดรต",
    "source": {
      "name": "ฝ่ายโภชนาการ ศิริราชพยาบาล",
      "url": "https://www.si.mahidol.ac.th/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามปกติ"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานได้มื้อละ 1-2 ทัพพี"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ทานได้มื้อละ 1-2 ทัพพี (ดีกว่าข้าวกล้อง)"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้ตามความต้องการพลังงาน"
      }
    }
  },
  {
    "id": "sago",
    "name": "สาคู / แป้งสลิ่ม / ลอดช่องสิงคโปร์",
    "category": "carb",
    "categoryName": "ข้าว-แป้ง",
    "icon": "🥣",
    "tags": [
      "แป้งปลอดโปรตีน",
      "พลังงานสะอาด",
      "ไร้ของเสีย"
    ],
    "keywords": [
      "สาคู",
      "แป้งสลิ่ม",
      "ลอดช่อง",
      "ขนมหวาน",
      "แป้งปลอดโปรตีน"
    ],
    "diseases": {
      "ckd": {
        "reason": "ทำจากแป้งมันสำปะหลัง จัดเป็นแป้งปลอดโปรตีน ไม่สร้างภาระยูเรียคั่งในไต",
        "tags": [
          "แป้งปลอดโปรตีน",
          "พลังงานสะอาด",
          "ไร้ของเสีย"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้พอเหมาะ"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานเป็นของว่างเสริมพลังงาน"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "🌟 เหมาะมากสำหรับเสริมพลังงานไม่ให้ผอมแห้ง"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้พอเหมาะ"
          }
        }
      }
    },
    "reason": "ทำจากแป้งมันสำปะหลัง จัดเป็นแป้งปลอดโปรตีน ไม่สร้างภาระยูเรียคั่งในไต",
    "advice": "ต้มใส่น้ำเชื่อมเจือจาง หรือกะทิสดปริมาณน้อยๆ เลี่ยงกะทิข้นจัด",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้พอเหมาะ"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานเป็นของว่างเสริมพลังงาน"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "🌟 เหมาะมากสำหรับเสริมพลังงานไม่ให้ผอมแห้ง"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้พอเหมาะ"
      }
    }
  },
  {
    "id": "brown-rice",
    "name": "ข้าวกล้อง / ขนมปังโฮลวีต / ข้าวไรซ์เบอร์รี่",
    "category": "carb",
    "categoryName": "ข้าว-แป้ง",
    "icon": "🍞",
    "tags": [
      "ฟอสฟอรัสสูงมาก",
      "โพแทสเซียมสูง",
      "เยื่อหุ้มเมล็ด"
    ],
    "keywords": [
      "ข้าวกล้อง",
      "โฮลวีต",
      "ข้าวไรซ์เบอร์รี่",
      "ธัญพืช",
      "ข้าวโอ๊ต",
      "ขนมปัง"
    ],
    "diseases": {
      "ckd": {
        "reason": "ตรงข้ามกับคนปกติ! เยื่อหุ้มเมล็ดและรำข้าวมีฟอสฟอรัสและโพแทสเซียมสูงมาก ไตเสื่อมขับไม่ได้ จะสะสมจนกระดูกบางและหลอดเลือดตีบ",
        "tags": [
          "ฟอสฟอรัสสูงมาก",
          "โพแทสเซียมสูง",
          "เยื่อหุ้มเมล็ด"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลรามาธิบดี",
            "url": "https://www.rama.mahidol.ac.th/ramachannel/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ ช่วยคุมเบาหวาน (แต่ควรตรวจเลือดดูฟอสฟอรัสประจำ)"
          },
          "stage3": {
            "level": "caution",
            "advice": "เริ่มลดปริมาณ และสลับเป็นข้าวขาว"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด ฟอสฟอรัสสะสมทำลายหลอดเลือดและกระดูก"
          },
          "dialysis": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          }
        }
      }
    },
    "reason": "ตรงข้ามกับคนปกติ! เยื่อหุ้มเมล็ดและรำข้าวมีฟอสฟอรัสและโพแทสเซียมสูงมาก ไตเสื่อมขับไม่ได้ จะสะสมจนกระดูกบางและหลอดเลือดตีบ",
    "advice": "เปลี่ยนมาทานข้าวขาว ขนมปังขาว หรือวุ้นเส้นแทน",
    "source": {
      "name": "โรงพยาบาลรามาธิบดี",
      "url": "https://www.rama.mahidol.ac.th/ramachannel/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ ช่วยคุมเบาหวาน (แต่ควรตรวจเลือดดูฟอสฟอรัสประจำ)"
      },
      "stage3": {
        "level": "caution",
        "advice": "เริ่มลดปริมาณ และสลับเป็นข้าวขาว"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด ฟอสฟอรัสสะสมทำลายหลอดเลือดและกระดูก"
      },
      "dialysis": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      }
    }
  },
  {
    "id": "herbs",
    "name": "สมุนไพรสด (ข่า ตะไคร้ ใบมะกรูด กระเทียม พริก)",
    "category": "condiment",
    "categoryName": "เครื่องปรุง",
    "icon": "🌿",
    "tags": [
      "โซเดียม 0%",
      "กลิ่นหอมธรรมชาติ",
      "ชูรสปลอดภัย"
    ],
    "keywords": [
      "สมุนไพร",
      "พริก",
      "กระเทียม",
      "ข่า",
      "ตะไคร้",
      "ใบมะกรูด",
      "เครื่องปรุง"
    ],
    "diseases": {
      "ckd": {
        "reason": "สมุนไพรสดไม่มีเกลือโซเดียม ช่วยเพิ่มกลิ่นและรสชาติให้อาหารกลมกล่อม เจริญอาหารโดยไม่ต้องพึ่งน้ำปลา",
        "tags": [
          "โซเดียม 0%",
          "กลิ่นหอมธรรมชาติ",
          "ชูรสปลอดภัย"
        ],
        "sources": [
          {
            "name": "กรมอนามัย กระทรวงสาธารณสุข",
            "url": "https://multimedia.anamai.moph.go.th/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ใช้ปรุงแต่งได้เต็มที่"
          },
          "stage3": {
            "level": "safe",
            "advice": "ใช้ช่วยชูรสเพื่อลดการใส่เกลือ"
          },
          "stage4_5_pre": {
            "level": "safe",
            "advice": "ปลอดภัยมาก ช่วยให้ทานอาหารรสจืดได้อร่อยขึ้น"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ปลอดภัยมาก"
          }
        }
      }
    },
    "reason": "สมุนไพรสดไม่มีเกลือโซเดียม ช่วยเพิ่มกลิ่นและรสชาติให้อาหารกลมกล่อม เจริญอาหารโดยไม่ต้องพึ่งน้ำปลา",
    "advice": "ใช้ต้มยำน้ำใส พริกสดบีบมะนาว กระเทียมสด เพื่อชูรสแทนผงชูรสหรือซุปก้อน",
    "source": {
      "name": "กรมอนามัย กระทรวงสาธารณสุข",
      "url": "https://multimedia.anamai.moph.go.th/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ใช้ปรุงแต่งได้เต็มที่"
      },
      "stage3": {
        "level": "safe",
        "advice": "ใช้ช่วยชูรสเพื่อลดการใส่เกลือ"
      },
      "stage4_5_pre": {
        "level": "safe",
        "advice": "ปลอดภัยมาก ช่วยให้ทานอาหารรสจืดได้อร่อยขึ้น"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ปลอดภัยมาก"
      }
    }
  },
  {
    "id": "soysauce-measured",
    "name": "ซีอิ๊วขาวธรรมดา / น้ำปลาแท้ (แบบตวงช้อน)",
    "category": "condiment",
    "categoryName": "เครื่องปรุง",
    "icon": "🥢",
    "tags": [
      "โซเดียมมาตรฐาน",
      "ต้องตวงช้อนเท่านั้น"
    ],
    "keywords": [
      "ซีอิ๊ว",
      "น้ำปลา",
      "เกลือ",
      "เครื่องปรุง",
      "ซอสปรุงรส"
    ],
    "diseases": {
      "ckd": {
        "reason": "แม้มีโซเดียม แต่สามารถคำนวณและควบคุมปริมาณได้ชัดเจน ปลอดภัยกว่าเกลือลดโซเดียมที่แอบเติมโพแทสเซียม",
        "tags": [
          "โซเดียมมาตรฐาน",
          "ต้องตวงช้อนเท่านั้น"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "คุมไม่เกิน 3 ช้อนชา/วัน"
          },
          "stage3": {
            "level": "caution",
            "advice": "คุมไม่เกิน 2-3 ช้อนชา/วัน"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "คุมไม่เกิน 1-2 ช้อนชา/วัน ตวงช้อนเท่านั้น"
          },
          "dialysis": {
            "level": "caution",
            "advice": "คุมไม่เกิน 1-2 ช้อนชา/วัน ป้องกันภาวะน้ำท่วมปอด"
          }
        }
      }
    },
    "reason": "แม้มีโซเดียม แต่สามารถคำนวณและควบคุมปริมาณได้ชัดเจน ปลอดภัยกว่าเกลือลดโซเดียมที่แอบเติมโพแทสเซียม",
    "advice": "ใช้ไม่เกิน 2-3 ช้อนชาต่อวันสำหรับทั้งวัน โดยต้องใช้ช้อนชาตวง ห้ามเหยาะจากขวดโดยตรง",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "คุมไม่เกิน 3 ช้อนชา/วัน"
      },
      "stage3": {
        "level": "caution",
        "advice": "คุมไม่เกิน 2-3 ช้อนชา/วัน"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "คุมไม่เกิน 1-2 ช้อนชา/วัน ตวงช้อนเท่านั้น"
      },
      "dialysis": {
        "level": "caution",
        "advice": "คุมไม่เกิน 1-2 ช้อนชา/วัน ป้องกันภาวะน้ำท่วมปอด"
      }
    }
  },
  {
    "id": "low-sodium-salt",
    "name": "เกลือลดโซเดียม / ซอสโลว์โซเดียม (อันตรายถึงชีวิต!)",
    "category": "condiment",
    "categoryName": "เครื่องปรุง",
    "icon": "🧂",
    "tags": [
      "ใส่โพแทสเซียมคลอไรด์แทนเกลือ",
      "เสี่ยงหัวใจหยุดเต้น",
      "กับดักอันตราย"
    ],
    "keywords": [
      "เกลือลดโซเดียม",
      "ซีอิ๊วลดโซเดียม",
      "ซอสโลว์โซเดียม",
      "เครื่องปรุง",
      "เกลือ"
    ],
    "diseases": {
      "ckd": {
        "reason": "ผู้ผลิตใส่สาร \"โพแทสเซียมคลอไรด์\" แทนโซเดียมเพื่อให้มีความเค็ม ในผู้ป่วยไตที่ขับโพแทสเซียมไม่ได้ จะทำให้หัวใจเต้นผิดจังหวะและหยุดเต้นเฉียบพลัน",
        "tags": [
          "ใส่โพแทสเซียมคลอไรด์แทนเกลือ",
          "เสี่ยงหัวใจหยุดเต้น",
          "กับดักอันตราย"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย (เตือนภัยเกลือลดโซเดียม)",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "danger",
            "advice": "ห้ามใช้เด็ดขาด"
          },
          "stage3": {
            "level": "danger",
            "advice": "ห้ามใช้เด็ดขาด"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "อันตรายถึงชีวิต! ห้ามใช้เด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "อันตรายถึงชีวิต! ห้ามใช้เด็ดขาด"
          }
        }
      }
    },
    "reason": "ผู้ผลิตใส่สาร \"โพแทสเซียมคลอไรด์\" แทนโซเดียมเพื่อให้มีความเค็ม ในผู้ป่วยไตที่ขับโพแทสเซียมไม่ได้ จะทำให้หัวใจเต้นผิดจังหวะและหยุดเต้นเฉียบพลัน",
    "advice": "❌ ห้ามใช้เด็ดขาดทุกระยะ ให้ใช้ซีอิ๊วขาวธรรมดาตวงปริมาณน้อยๆ แทน",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย (เตือนภัยเกลือลดโซเดียม)",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "danger",
        "advice": "ห้ามใช้เด็ดขาด"
      },
      "stage3": {
        "level": "danger",
        "advice": "ห้ามใช้เด็ดขาด"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "อันตรายถึงชีวิต! ห้ามใช้เด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "อันตรายถึงชีวิต! ห้ามใช้เด็ดขาด"
      }
    }
  },
  {
    "id": "water",
    "name": "น้ำเปล่าสะอาด",
    "category": "drink",
    "categoryName": "เครื่องดื่ม/ของหวาน",
    "icon": "💧",
    "tags": [
      "ไม่มีสารตกค้าง",
      "แร่ธาตุ 0%"
    ],
    "keywords": [
      "น้ำเปล่า",
      "น้ำดื่ม",
      "น้ำ",
      "เครื่องดื่ม"
    ],
    "diseases": {
      "ckd": {
        "reason": "น้ำเปล่าสะอาดเป็นของเหลวที่ดีที่สุด ช่วยขับสารพิษโดยไม่เพิ่มภาระแร่ธาตุใดๆ ให้ไต",
        "tags": [
          "ไม่มีสารตกค้าง",
          "แร่ธาตุ 0%"
        ],
        "sources": [
          {
            "name": "สมาคมโรคไตแห่งประเทศไทย",
            "url": "https://www.nephrothai.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ดื่มได้ปกติ 1.5 - 2 ลิตร/วัน"
          },
          "stage3": {
            "level": "safe",
            "advice": "ดื่มได้ 1.5 - 2 ลิตร (หากไม่มีอาการบวม)"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "ดื่มได้ตามปริมาณปัสสาวะ + 500 มล. ระวังอาการบวมน้ำและน้ำท่วมปอด"
          },
          "dialysis": {
            "level": "caution",
            "advice": "ต้องจำกัดน้ำเข้มงวด ชั่งน้ำหนักทุกวันเพื่อไม่ให้น้ำหนักเกิน 1-1.5 กก. ระหว่างรอบฟอก"
          }
        }
      }
    },
    "reason": "น้ำเปล่าสะอาดเป็นของเหลวที่ดีที่สุด ช่วยขับสารพิษโดยไม่เพิ่มภาระแร่ธาตุใดๆ ให้ไต",
    "advice": "ดื่มตามเกณฑ์ของแต่ละระยะ: ระยะแรกดื่มได้ 1.5-2 ลิตร แต่หากระยะฟอกไตหรือมีอาการบวม ต้องจำกัดตามปริมาณปัสสาวะ",
    "source": {
      "name": "สมาคมโรคไตแห่งประเทศไทย",
      "url": "https://www.nephrothai.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ดื่มได้ปกติ 1.5 - 2 ลิตร/วัน"
      },
      "stage3": {
        "level": "safe",
        "advice": "ดื่มได้ 1.5 - 2 ลิตร (หากไม่มีอาการบวม)"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "ดื่มได้ตามปริมาณปัสสาวะ + 500 มล. ระวังอาการบวมน้ำและน้ำท่วมปอด"
      },
      "dialysis": {
        "level": "caution",
        "advice": "ต้องจำกัดน้ำเข้มงวด ชั่งน้ำหนักทุกวันเพื่อไม่ให้น้ำหนักเกิน 1-1.5 กก. ระหว่างรอบฟอก"
      }
    }
  },
  {
    "id": "coconut-water",
    "name": "น้ำมะพร้าวสด",
    "category": "drink",
    "categoryName": "เครื่องดื่ม/ของหวาน",
    "icon": "🥥",
    "tags": [
      "โพแทสเซียมสูงจัด",
      "เสี่ยงหัวใจหยุดเต้น"
    ],
    "keywords": [
      "น้ำมะพร้าว",
      "มะพร้าว",
      "เครื่องดื่ม",
      "ผลไม้"
    ],
    "diseases": {
      "ckd": {
        "reason": "เป็นน้ำเกลือแร่ธรรมชาติที่มีโพแทสเซียมเข้มข้นที่สุด เพียงแก้วเดียวทำให้โพแทสเซียมในเลือดทะลุเกณฑ์วิกฤต",
        "tags": [
          "โพแทสเซียมสูงจัด",
          "เสี่ยงหัวใจหยุดเต้น"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลรามาธิบดี",
            "url": "https://www.rama.mahidol.ac.th/ramachannel/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ดื่มได้ครั้งคราว แก้วเล็ก"
          },
          "stage3": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ห้ามดื่มเด็ดขาด เสี่ยงหัวใจวาย"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ห้ามดื่มเด็ดขาด"
          }
        }
      }
    },
    "reason": "เป็นน้ำเกลือแร่ธรรมชาติที่มีโพแทสเซียมเข้มข้นที่สุด เพียงแก้วเดียวทำให้โพแทสเซียมในเลือดทะลุเกณฑ์วิกฤต",
    "advice": "หลีกเลี่ยงเด็ดขาดสำหรับผู้ป่วยโรคไตระยะกลางถึงระยะท้าย",
    "source": {
      "name": "โรงพยาบาลรามาธิบดี",
      "url": "https://www.rama.mahidol.ac.th/ramachannel/"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ดื่มได้ครั้งคราว แก้วเล็ก"
      },
      "stage3": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ห้ามดื่มเด็ดขาด เสี่ยงหัวใจวาย"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ห้ามดื่มเด็ดขาด"
      }
    }
  },
  {
    "id": "dark-cola",
    "name": "น้ำอัดลมสีดำ (โคล่า) / โกโก้ / ช็อกโกแลต",
    "category": "drink",
    "categoryName": "เครื่องดื่ม/ของหวาน",
    "icon": "🥤",
    "tags": [
      "กรดฟอสฟอริกสังเคราะห์",
      "ฟอสฟอรัสสูงจัด"
    ],
    "keywords": [
      "โคล่า",
      "เป๊ปซี่",
      "โค้ก",
      "น้ำอัดลม",
      "ช็อกโกแลต",
      "โกโก้",
      "เครื่องดื่ม"
    ],
    "diseases": {
      "ckd": {
        "reason": "น้ำอัดลมสีเข้มใส่กรดฟอสฟอริกสังเคราะห์ ร่างกายดูดซึมได้ 100% เร่งให้กระดูกพรุนและหลอดเลือดแข็งตัวอย่างรวดเร็ว ส่วนโกโก้มีฟอสฟอรัสธรรมชาติสูงมาก",
        "tags": [
          "กรดฟอสฟอริกสังเคราะห์",
          "ฟอสฟอรัสสูงจัด"
        ],
        "sources": [
          {
            "name": "American Kidney Fund",
            "url": "https://www.kidneyfund.org/"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ลดให้น้อยลง มีน้ำตาลและฟอสเฟตสูง"
          },
          "stage3": {
            "level": "danger",
            "advice": "หลีกเลี่ยงเด็ดขาด"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ห้ามดื่มเด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ห้ามดื่มเด็ดขาด ฟอสเฟตดูดซึมทันทีและฟอกออกยาก"
          }
        }
      }
    },
    "reason": "น้ำอัดลมสีเข้มใส่กรดฟอสฟอริกสังเคราะห์ ร่างกายดูดซึมได้ 100% เร่งให้กระดูกพรุนและหลอดเลือดแข็งตัวอย่างรวดเร็ว ส่วนโกโก้มีฟอสฟอรัสธรรมชาติสูงมาก",
    "advice": "หลีกเลี่ยงเด็ดขาด ดื่มน้ำเปล่าหรือน้ำสมุนไพรอ่อนๆ ไม่หวานแทน",
    "source": {
      "name": "American Kidney Fund",
      "url": "https://www.kidneyfund.org/"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ลดให้น้อยลง มีน้ำตาลและฟอสเฟตสูง"
      },
      "stage3": {
        "level": "danger",
        "advice": "หลีกเลี่ยงเด็ดขาด"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ห้ามดื่มเด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ห้ามดื่มเด็ดขาด ฟอสเฟตดูดซึมทันทีและฟอกออกยาก"
      }
    }
  },
  {
    "id": "avocado",
    "name": "อะโวคาโด",
    "category": "fruit",
    "categoryName": "ผลไม้",
    "icon": "🥑",
    "tags": [
      "โพแทสเซียมสูงมาก",
      "ไขมันดีสูง"
    ],
    "keywords": [
      "อะโวคาโด",
      "avocado",
      "ผลไม้",
      "ไขมันดี",
      "สลัด"
    ],
    "diseases": {
      "ckd": {
        "reason": "แม้จะมีไขมันดีและใยอาหารสูง แต่อะโวคาโดมีโพแทสเซียมสูงมาก (สูงกว่ากล้วยเมื่อเทียบต่อน้ำหนัก) ผู้ป่วยไตขับออกไม่ทัน",
        "tags": [
          "โพแทสเซียมสูงมาก",
          "ไขมันดีสูง"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (เอกสารเจาะลึกเรื่องอะโวคาโด)",
            "url": "https://www.kidney.org/sites/default/files/441-9152_2210_patflyer_superfood-avocado.pdf"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ทานได้ครั้งละ 2-3 ช้อนโต๊ะ ไม่บ่อย"
          },
          "stage3": {
            "level": "caution",
            "advice": "จำกัดครั้งละ 1-2 ช้อนโต๊ะ สัปดาห์ละ 1-2 ครั้ง"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง โพแทสเซียมสูงเกินไตขับ"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง"
          }
        }
      }
    },
    "reason": "แม้จะมีไขมันดีและใยอาหารสูง แต่อะโวคาโดมีโพแทสเซียมสูงมาก (สูงกว่ากล้วยเมื่อเทียบต่อน้ำหนัก) ผู้ป่วยไตขับออกไม่ทัน",
    "advice": "จำกัดปริมาณอย่างเข้มงวด โดยเฉพาะระยะที่โพแทสเซียมในเลือดเริ่มสูง",
    "source": {
      "name": "National Kidney Foundation (เอกสารเจาะลึกเรื่องอะโวคาโด)",
      "url": "https://www.kidney.org/sites/default/files/441-9152_2210_patflyer_superfood-avocado.pdf"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ทานได้ครั้งละ 2-3 ช้อนโต๊ะ ไม่บ่อย"
      },
      "stage3": {
        "level": "caution",
        "advice": "จำกัดครั้งละ 1-2 ช้อนโต๊ะ สัปดาห์ละ 1-2 ครั้ง"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง โพแทสเซียมสูงเกินไตขับ"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง"
      }
    }
  },
  {
    "id": "potato",
    "name": "มันฝรั่ง",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🥔",
    "tags": [
      "โพแทสเซียมสูงมาก",
      "ลดได้ด้วยการแช่/ต้มทิ้งน้ำ"
    ],
    "keywords": [
      "มันฝรั่ง",
      "potato",
      "ผัก",
      "เฟรนช์ฟราย",
      "มันบด"
    ],
    "diseases": {
      "ckd": {
        "reason": "มันฝรั่งมีโพแทสเซียมสูงมาก โดยเฉพาะเปลือกและเนื้อใกล้เปลือก แต่สามารถลดปริมาณลงได้มากด้วยการหั่นแช่น้ำและต้มทิ้งน้ำก่อนปรุง",
        "tags": [
          "โพแทสเซียมสูงมาก",
          "ลดได้ด้วยการแช่/ต้มทิ้งน้ำ"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (บทความ Root Vegetables)",
            "url": "https://www.kidney.org/kidney-topics/root-vegetables"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามปกติ (แนะนำต้มทิ้งน้ำก่อน)"
          },
          "stage3": {
            "level": "caution",
            "advice": "ต้องแช่น้ำ+ต้มทิ้งน้ำก่อนเสมอ ทานแต่พอเหมาะ"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง แม้ลดโพแทสเซียมแล้วยังเสี่ยงสูง"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง"
          }
        }
      }
    },
    "reason": "มันฝรั่งมีโพแทสเซียมสูงมาก โดยเฉพาะเปลือกและเนื้อใกล้เปลือก แต่สามารถลดปริมาณลงได้มากด้วยการหั่นแช่น้ำและต้มทิ้งน้ำก่อนปรุง",
    "advice": "ปอกเปลือก หั่นชิ้นเล็ก แช่น้ำอย่างน้อย 2 ชั่วโมง แล้วต้มทิ้งน้ำก่อนนำไปปรุงต่อ",
    "source": {
      "name": "National Kidney Foundation (บทความ Root Vegetables)",
      "url": "https://www.kidney.org/kidney-topics/root-vegetables"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามปกติ (แนะนำต้มทิ้งน้ำก่อน)"
      },
      "stage3": {
        "level": "caution",
        "advice": "ต้องแช่น้ำ+ต้มทิ้งน้ำก่อนเสมอ ทานแต่พอเหมาะ"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง แม้ลดโพแทสเซียมแล้วยังเสี่ยงสูง"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง"
      }
    }
  },
  {
    "id": "mushroom",
    "name": "เห็ดทุกชนิด (เห็ดฟาง, เห็ดนางฟ้า, เห็ดหอม)",
    "category": "vegetable",
    "categoryName": "ผัก",
    "icon": "🍄",
    "tags": [
      "โพแทสเซียมสูง",
      "ฟอสฟอรัสปานกลาง-สูง"
    ],
    "keywords": [
      "เห็ด",
      "เห็ดฟาง",
      "เห็ดนางฟ้า",
      "เห็ดหอม",
      "ผัก"
    ],
    "diseases": {
      "ckd": {
        "reason": "เห็ดมีโพแทสเซียมและฟอสฟอรัสค่อนข้างสูงเมื่อเทียบกับผักทั่วไป โดยเฉพาะเห็ดหอมแห้ง",
        "tags": [
          "โพแทสเซียมสูง",
          "ฟอสฟอรัสปานกลาง-สูง"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (บทความ Potassium in Your CKD Diet)",
            "url": "https://www.kidney.org/kidney-topics/potassium-your-ckd-diet"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามปกติ"
          },
          "stage3": {
            "level": "caution",
            "advice": "จำกัดปริมาณ ครั้งละ 3-4 ดอก"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง โดยเฉพาะเห็ดหอมแห้ง"
          },
          "dialysis": {
            "level": "caution",
            "advice": "ทานได้น้อยมากเป็นครั้งคราว"
          }
        }
      }
    },
    "reason": "เห็ดมีโพแทสเซียมและฟอสฟอรัสค่อนข้างสูงเมื่อเทียบกับผักทั่วไป โดยเฉพาะเห็ดหอมแห้ง",
    "advice": "ทานได้ในปริมาณน้อยเป็นครั้งคราว หลีกเลี่ยงเห็ดหอมแห้งที่นำมาต้มน้ำซุปเข้มข้น",
    "source": {
      "name": "National Kidney Foundation (บทความ Potassium in Your CKD Diet)",
      "url": "https://www.kidney.org/kidney-topics/potassium-your-ckd-diet"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามปกติ"
      },
      "stage3": {
        "level": "caution",
        "advice": "จำกัดปริมาณ ครั้งละ 3-4 ดอก"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง โดยเฉพาะเห็ดหอมแห้ง"
      },
      "dialysis": {
        "level": "caution",
        "advice": "ทานได้น้อยมากเป็นครั้งคราว"
      }
    }
  },
  {
    "id": "cow-milk",
    "name": "นมวัว (จืด/หวาน/พร่องมันเนย)",
    "category": "drink",
    "categoryName": "เครื่องดื่ม/ของหวาน",
    "icon": "🥛",
    "tags": [
      "ฟอสฟอรัสสูงมาก",
      "โพแทสเซียมสูง",
      "ควรจำกัดทุกระยะ"
    ],
    "keywords": [
      "นมวัว",
      "นม",
      "นมสด",
      "นมจืด",
      "นมหวาน",
      "เครื่องดื่ม"
    ],
    "diseases": {
      "ckd": {
        "reason": "นมวัวมีทั้งฟอสฟอรัสและโพแทสเซียมสูงมากในปริมาณเข้มข้น เป็นสาเหตุหลักที่ทำให้ค่าฟอสเฟตในเลือดของผู้ป่วยไตพุ่งสูงหากดื่มเป็นประจำ",
        "tags": [
          "ฟอสฟอรัสสูงมาก",
          "โพแทสเซียมสูง",
          "ควรจำกัดทุกระยะ"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (บทความ Dairy and Our Kidneys)",
            "url": "https://www.kidney.org/kidney-topics/dairy-and-our-kidneys"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ดื่มได้ไม่เกิน 1 แก้วเล็ก/วัน"
          },
          "stage3": {
            "level": "caution",
            "advice": "จำกัดไม่เกิน 1/2 แก้ว/วัน หรือน้อยกว่า"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง หรือเลือกนมสูตรเฉพาะโรคไตแทน"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง ฟอสฟอรัสสะสมเร็วมาก"
          }
        }
      }
    },
    "reason": "นมวัวมีทั้งฟอสฟอรัสและโพแทสเซียมสูงมากในปริมาณเข้มข้น เป็นสาเหตุหลักที่ทำให้ค่าฟอสเฟตในเลือดของผู้ป่วยไตพุ่งสูงหากดื่มเป็นประจำ",
    "advice": "จำกัดปริมาณอย่างเข้มงวด พิจารณาเปลี่ยนเป็นนมสูตรเฉพาะโรคไตหรือดื่มในปริมาณน้อยมาก",
    "source": {
      "name": "National Kidney Foundation (บทความ Dairy and Our Kidneys)",
      "url": "https://www.kidney.org/kidney-topics/dairy-and-our-kidneys"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ดื่มได้ไม่เกิน 1 แก้วเล็ก/วัน"
      },
      "stage3": {
        "level": "caution",
        "advice": "จำกัดไม่เกิน 1/2 แก้ว/วัน หรือน้อยกว่า"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง หรือเลือกนมสูตรเฉพาะโรคไตแทน"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง ฟอสฟอรัสสะสมเร็วมาก"
      }
    }
  },
  {
    "id": "soy-milk-unsweetened",
    "name": "นมถั่วเหลือง (สูตรไม่หวาน/ไม่เสริมแคลเซียม)",
    "category": "drink",
    "categoryName": "เครื่องดื่ม/ของหวาน",
    "icon": "🥛",
    "tags": [
      "ฟอสฟอรัสน้อยกว่านมวัว",
      "โปรตีนพืช"
    ],
    "keywords": [
      "นมถั่วเหลือง",
      "นมถั่ว",
      "เครื่องดื่ม",
      "โปรตีนพืช"
    ],
    "diseases": {
      "ckd": {
        "reason": "มีฟอสฟอรัสและโพแทสเซียมต่ำกว่านมวัวพอสมควร เป็นทางเลือกที่ดีกว่าสำหรับผู้ที่ต้องจำกัดฟอสฟอรัส แต่สูตรเสริมแคลเซียม/เสริมสารอาหารบางยี่ห้ออาจมีฟอสฟอรัสสูงขึ้น ควรอ่านฉลาก",
        "tags": [
          "ฟอสฟอรัสน้อยกว่านมวัว",
          "โปรตีนพืช"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (บทความ Plant Based Milk and Kidney Disease)",
            "url": "https://www.kidney.org/kidney-topics/milk-alternatives"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ดื่มได้ตามปกติ เลือกสูตรไม่หวาน"
          },
          "stage3": {
            "level": "safe",
            "advice": "ดื่มได้วันละ 1 แก้ว"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "จำกัดปริมาณ เลือกสูตรไม่เสริมแคลเซียม"
          },
          "dialysis": {
            "level": "caution",
            "advice": "จำกัดปริมาณ"
          }
        }
      }
    },
    "reason": "มีฟอสฟอรัสและโพแทสเซียมต่ำกว่านมวัวพอสมควร เป็นทางเลือกที่ดีกว่าสำหรับผู้ที่ต้องจำกัดฟอสฟอรัส แต่สูตรเสริมแคลเซียม/เสริมสารอาหารบางยี่ห้ออาจมีฟอสฟอรัสสูงขึ้น ควรอ่านฉลาก",
    "advice": "เลือกสูตรไม่หวาน ไม่เสริมแคลเซียม และดื่มในปริมาณพอเหมาะ",
    "source": {
      "name": "National Kidney Foundation (บทความ Plant Based Milk and Kidney Disease)",
      "url": "https://www.kidney.org/kidney-topics/milk-alternatives"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ดื่มได้ตามปกติ เลือกสูตรไม่หวาน"
      },
      "stage3": {
        "level": "safe",
        "advice": "ดื่มได้วันละ 1 แก้ว"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "จำกัดปริมาณ เลือกสูตรไม่เสริมแคลเซียม"
      },
      "dialysis": {
        "level": "caution",
        "advice": "จำกัดปริมาณ"
      }
    }
  },
  {
    "id": "tofu",
    "name": "เต้าหู้ (เต้าหู้ขาว/เต้าหู้หลอด)",
    "category": "protein",
    "categoryName": "เนื้อสัตว์/โปรตีน",
    "icon": "🧊",
    "tags": [
      "โปรตีนพืชคุณภาพดี",
      "ฟอสฟอรัสปานกลาง"
    ],
    "keywords": [
      "เต้าหู้",
      "เต้าหู้ขาว",
      "เต้าหู้หลอด",
      "โปรตีนพืช"
    ],
    "diseases": {
      "ckd": {
        "reason": "เป็นโปรตีนทางเลือกที่ย่อยง่าย มีฟอสฟอรัสน้อยกว่าเนื้อสัตว์แปรรูปและถั่วเมล็ดแห้ง เหมาะเป็นโปรตีนสลับมื้อ",
        "tags": [
          "โปรตีนพืชคุณภาพดี",
          "ฟอสฟอรัสปานกลาง"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (บทความ Tofu and Kidney Disease)",
            "url": "https://www.kidney.org/kidney-topics/tofu"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้ตามปกติ"
          },
          "stage3": {
            "level": "safe",
            "advice": "ทานมื้อละ 2-3 ช้อนโต๊ะ สลับกับเนื้อสัตว์"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "จำกัดปริมาณตามโควตาโปรตีนรวมต่อวัน"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้ดี เป็นโปรตีนเสริม"
          }
        }
      },
      "gout": {
        "reason": "งานวิจัยทางคลินิกยุคใหม่พบว่าโปรตีนจากถั่วเหลืองแปรรูป (เต้าหู้) มีพิวรีนปานกลางและช่วยการขับกรดยูริก ไม่กระตุ้นอาการเกาต์เหมือนเนื้อสัตว์",
        "tags": [
          "พิวรีนปานกลาง",
          "โปรตีนพืชปลอดภัย"
        ],
        "sources": [
          {
            "name": "American College of Rheumatology (ACR Gout Guidelines)",
            "url": "https://rheumatology.org/"
          }
        ],
        "stages": {
          "default": {
            "level": "safe",
            "advice": "รับประทานได้ตามปกติ เป็นแหล่งโปรตีนทดแทนเนื้อสัตว์ที่ดี"
          }
        }
      }
    },
    "reason": "เป็นโปรตีนทางเลือกที่ย่อยง่าย มีฟอสฟอรัสน้อยกว่าเนื้อสัตว์แปรรูปและถั่วเมล็ดแห้ง เหมาะเป็นโปรตีนสลับมื้อ",
    "advice": "ทานสลับกับไข่ขาวและเนื้อปลา ปรุงแบบต้ม นึ่ง หรือผัดน้ำมันน้อย",
    "source": {
      "name": "National Kidney Foundation (บทความ Tofu and Kidney Disease)",
      "url": "https://www.kidney.org/kidney-topics/tofu"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้ตามปกติ"
      },
      "stage3": {
        "level": "safe",
        "advice": "ทานมื้อละ 2-3 ช้อนโต๊ะ สลับกับเนื้อสัตว์"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "จำกัดปริมาณตามโควตาโปรตีนรวมต่อวัน"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้ดี เป็นโปรตีนเสริม"
      }
    }
  },
  {
    "id": "shrimp",
    "name": "กุ้ง",
    "category": "protein",
    "categoryName": "เนื้อสัตว์/โปรตีน",
    "icon": "🍤",
    "tags": [
      "พิวรีนสูง",
      "คอเลสเตอรอลสูง",
      "ฟอสฟอรัสปานกลาง",
      "ระวังฟอสเฟตในกุ้งแช่แข็ง"
    ],
    "keywords": [
      "กุ้ง",
      "อาหารทะเล",
      "โปรตีน",
      "กุ้งเผา",
      "กุ้งแช่น้ำปลา"
    ],
    "diseases": {
      "ckd": {
        "reason": "กุ้งมีคอเลสเตอรอลและพิวรีนค่อนข้างสูง (สำคัญมากถ้ามีโรคเก๊าท์ร่วมด้วย) แต่โพแทสเซียมและฟอสฟอรัสอยู่ในระดับปานกลาง ทานได้ในปริมาณจำกัด ⚠️ ข้อควรระวัง: กุ้งแช่แข็งสำเร็จรูปหรือกุ้งเด้งมักแช่สารฟอสเฟตสังเคราะห์ (STPP) เพื่ออุ้มน้ำ ซึ่งร่างกายดูดซึมได้ 100% ควรเลือกกุ้งสดธรรมชาติ",
        "tags": [
          "พิวรีนสูง",
          "คอเลสเตอรอลสูง",
          "ฟอสฟอรัสปานกลาง",
          "ระวังฟอสเฟตในกุ้งแช่แข็ง"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (บทความ Shellfish)",
            "url": "https://www.kidney.org/kidney-topics/shellfish"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ทานได้มื้อละ 4-5 ตัวขนาดกลาง"
          },
          "stage3": {
            "level": "caution",
            "advice": "จำกัดมื้อละ 3-4 ตัว ไม่บ่อย"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "จำกัดปริมาณตามโควตาโปรตีนรวม"
          },
          "dialysis": {
            "level": "safe",
            "advice": "ทานได้มื้อละ 4-5 ตัว เพื่อเสริมโปรตีน"
          }
        }
      },
      "gout": {
        "reason": "กุ้งมีสารพิวรีนสูงมาก (150-1,000 มก./100 กรัม) ซึ่งร่างกายจะเปลี่ยนเป็นกรดยูริกตกตะกอนตามข้อ กระตุ้นให้ข้ออักเสบเฉียบพลัน",
        "tags": [
          "พิวรีนสูงมาก",
          "เสี่ยงเกาต์กำเริบเฉียบพลัน"
        ],
        "sources": [
          {
            "name": "สมาคมรูมาติสซั่มแห่งประเทศไทย",
            "url": "https://www.thairheumatology.org/"
          }
        ],
        "stages": {
          "default": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยงเด็ดขาด โดยเฉพาะช่วงที่ข้อกำลังอักเสบหรือระดับกรดยูริกในเลือดยังสูง"
          }
        }
      }
    },
    "reason": "กุ้งมีคอเลสเตอรอลและพิวรีนค่อนข้างสูง (สำคัญมากถ้ามีโรคเก๊าท์ร่วมด้วย) แต่โพแทสเซียมและฟอสฟอรัสอยู่ในระดับปานกลาง ทานได้ในปริมาณจำกัด ⚠️ ข้อควรระวัง: กุ้งแช่แข็งสำเร็จรูปหรือกุ้งเด้งมักแช่สารฟอสเฟตสังเคราะห์ (STPP) เพื่ออุ้มน้ำ ซึ่งร่างกายดูดซึมได้ 100% ควรเลือกกุ้งสดธรรมชาติ",
    "advice": "ทานได้ในปริมาณพอเหมาะ ไม่ทานพร้อมส่วนหัวหรือมันกุ้ง หลีกเลี่ยงหากมีโรคเก๊าท์ร่วม",
    "source": {
      "name": "National Kidney Foundation (บทความ Shellfish)",
      "url": "https://www.kidney.org/kidney-topics/shellfish"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ทานได้มื้อละ 4-5 ตัวขนาดกลาง"
      },
      "stage3": {
        "level": "caution",
        "advice": "จำกัดมื้อละ 3-4 ตัว ไม่บ่อย"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "จำกัดปริมาณตามโควตาโปรตีนรวม"
      },
      "dialysis": {
        "level": "safe",
        "advice": "ทานได้มื้อละ 4-5 ตัว เพื่อเสริมโปรตีน"
      }
    }
  },
  {
    "id": "instant-noodle",
    "name": "บะหมี่กึ่งสำเร็จรูป",
    "category": "carb",
    "categoryName": "ข้าว-แป้ง",
    "icon": "🍥",
    "tags": [
      "โซเดียมสูงจัด",
      "ฟอสเฟตสังเคราะห์",
      "อันตราย"
    ],
    "keywords": [
      "บะหมี่กึ่งสำเร็จรูป",
      "มาม่า",
      "ไวไว",
      "ยำยำ",
      "บะหมี่ซอง"
    ],
    "diseases": {
      "ckd": {
        "reason": "ผงปรุงรสมีโซเดียมสูงมากในซองเดียว และเส้นมักผสมสารฟอสเฟตเพื่อความเหนียวนุ่ม ซึ่งร่างกายดูดซึมได้เกือบทั้งหมด",
        "tags": [
          "โซเดียมสูงจัด",
          "ฟอสเฟตสังเคราะห์",
          "อันตราย"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลพระรามเก้า (บทความอาหารผู้ป่วยโรคไตวายเรื้อรัง)",
            "url": "https://praram9.com/th/articles/food-for-ckd-patients"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ทานได้นานๆ ครั้ง ใช้ผงปรุงรสน้อยกว่าครึ่งซอง"
          },
          "stage3": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง โซเดียมสูงเกินไป"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ห้ามรับประทาน"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ห้ามรับประทาน เสี่ยงบวมน้ำและฟอสเฟตพุ่ง"
          }
        }
      }
    },
    "reason": "ผงปรุงรสมีโซเดียมสูงมากในซองเดียว และเส้นมักผสมสารฟอสเฟตเพื่อความเหนียวนุ่ม ซึ่งร่างกายดูดซึมได้เกือบทั้งหมด",
    "advice": "หลีกเลี่ยงหรือทานนานๆ ครั้ง ใช้ผงปรุงรสไม่เกินครึ่งซอง และเติมผักลวก/ไข่ขาวแทนการเติมเครื่องปรุงเพิ่ม",
    "source": {
      "name": "โรงพยาบาลพระรามเก้า (บทความอาหารผู้ป่วยโรคไตวายเรื้อรัง)",
      "url": "https://praram9.com/th/articles/food-for-ckd-patients"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ทานได้นานๆ ครั้ง ใช้ผงปรุงรสน้อยกว่าครึ่งซอง"
      },
      "stage3": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง โซเดียมสูงเกินไป"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ห้ามรับประทาน"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ห้ามรับประทาน เสี่ยงบวมน้ำและฟอสเฟตพุ่ง"
      }
    }
  },
  {
    "id": "fermented-fish",
    "name": "ปลาร้า / ปลาเจ่า / น้ำปลาร้า",
    "category": "condiment",
    "categoryName": "เครื่องปรุง",
    "icon": "🫙",
    "tags": [
      "โซเดียมสูงจัดที่สุด",
      "อันตราย"
    ],
    "keywords": [
      "ปลาร้า",
      "ปลาเจ่า",
      "น้ำปลาร้า",
      "ส้มตำ",
      "เครื่องปรุง"
    ],
    "diseases": {
      "ckd": {
        "reason": "เป็นเครื่องปรุงที่มีโซเดียมเข้มข้นที่สุดในอาหารไทย เพียงช้อนเดียวอาจเทียบเท่าโซเดียมทั้งวันที่ควรได้รับ",
        "tags": [
          "โซเดียมสูงจัดที่สุด",
          "อันตราย"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลศิริราช ปิยมหาราชการุณย์ (บทความโรคไต ภัยเงียบจากความเค็ม)",
            "url": "https://www.siphhospital.com/th/news/article/share/sodium-and-kidney-disease"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง โซเดียมสูงมาก"
          },
          "stage3": {
            "level": "danger",
            "advice": "ห้ามรับประทาน"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ห้ามรับประทานเด็ดขาด"
          }
        }
      }
    },
    "reason": "เป็นเครื่องปรุงที่มีโซเดียมเข้มข้นที่สุดในอาหารไทย เพียงช้อนเดียวอาจเทียบเท่าโซเดียมทั้งวันที่ควรได้รับ",
    "advice": "❌ ควรหลีกเลี่ยงทุกระยะ ใช้สมุนไพรสดหรือน้ำมะนาวชูรสแทน",
    "source": {
      "name": "โรงพยาบาลศิริราช ปิยมหาราชการุณย์ (บทความโรคไต ภัยเงียบจากความเค็ม)",
      "url": "https://www.siphhospital.com/th/news/article/share/sodium-and-kidney-disease"
    },
    "stages": {
      "stage1_2": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง โซเดียมสูงมาก"
      },
      "stage3": {
        "level": "danger",
        "advice": "ห้ามรับประทาน"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ห้ามรับประทานเด็ดขาด"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ห้ามรับประทานเด็ดขาด"
      }
    }
  },
  {
    "id": "pickled-vegetable",
    "name": "ผักดอง / ไชโป๊ว / กิมจิ",
    "category": "condiment",
    "categoryName": "เครื่องปรุง",
    "icon": "🥒",
    "tags": [
      "โซเดียมสูงมาก"
    ],
    "keywords": [
      "ผักดอง",
      "ไชโป๊ว",
      "กิมจิ",
      "ผักกาดดอง",
      "เครื่องปรุง"
    ],
    "diseases": {
      "ckd": {
        "reason": "กระบวนการดองใช้เกลือปริมาณมาก ทำให้โซเดียมสูงมากแม้จะเป็นผัก และยังมีโพแทสเซียมจากน้ำดองสะสมด้วย",
        "tags": [
          "โซเดียมสูงมาก"
        ],
        "sources": [
          {
            "name": "โรงพยาบาลศิริราช ปิยมหาราชการุณย์ (บทความโรคไต ภัยเงียบจากความเค็ม)",
            "url": "https://www.siphhospital.com/th/news/article/share/sodium-and-kidney-disease"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "caution",
            "advice": "ทานได้น้อยมาก ล้างน้ำก่อน"
          },
          "stage3": {
            "level": "danger",
            "advice": "ควรหลีกเลี่ยง"
          },
          "stage4_5_pre": {
            "level": "danger",
            "advice": "ห้ามรับประทาน"
          },
          "dialysis": {
            "level": "danger",
            "advice": "ห้ามรับประทาน"
          }
        }
      }
    },
    "reason": "กระบวนการดองใช้เกลือปริมาณมาก ทำให้โซเดียมสูงมากแม้จะเป็นผัก และยังมีโพแทสเซียมจากน้ำดองสะสมด้วย",
    "advice": "หลีกเลี่ยงหรือทานปริมาณน้อยมาก ล้างน้ำก่อนทานเพื่อลดโซเดียมบางส่วน",
    "source": {
      "name": "โรงพยาบาลศิริราช ปิยมหาราชการุณย์ (บทความโรคไต ภัยเงียบจากความเค็ม)",
      "url": "https://www.siphhospital.com/th/news/article/share/sodium-and-kidney-disease"
    },
    "stages": {
      "stage1_2": {
        "level": "caution",
        "advice": "ทานได้น้อยมาก ล้างน้ำก่อน"
      },
      "stage3": {
        "level": "danger",
        "advice": "ควรหลีกเลี่ยง"
      },
      "stage4_5_pre": {
        "level": "danger",
        "advice": "ห้ามรับประทาน"
      },
      "dialysis": {
        "level": "danger",
        "advice": "ห้ามรับประทาน"
      }
    }
  },
  {
    "id": "coffee",
    "name": "กาแฟ (ดำ/ใส่นม)",
    "category": "drink",
    "categoryName": "เครื่องดื่ม/ของหวาน",
    "icon": "☕",
    "tags": [
      "คาเฟอีน",
      "โพแทสเซียมปานกลางถ้าไม่ใส่นม",
      "เลี่ยงกาแฟ 3-in-1"
    ],
    "keywords": [
      "กาแฟ",
      "กาแฟดำ",
      "คาเฟอีน",
      "เครื่องดื่ม"
    ],
    "diseases": {
      "ckd": {
        "reason": "กาแฟดำมีโพแทสเซียมไม่สูงมากหากดื่มในปริมาณพอเหมาะ แต่หากใส่นมหรือครีมเทียมจะเพิ่มฟอสฟอรัสและโพแทสเซียมตามไปด้วย ⚠️ หลีกเลี่ยงกาแฟ 3-in-1 หรือกาแฟกระป๋องสำเร็จรูป เพราะมีครีมเทียม ไขมันทรานส์ และสารฟอสเฟตสังเคราะห์",
        "tags": [
          "คาเฟอีน",
          "โพแทสเซียมปานกลางถ้าไม่ใส่นม",
          "เลี่ยงกาแฟ 3-in-1"
        ],
        "sources": [
          {
            "name": "National Kidney Foundation (บทความ Coffee and Kidney Disease: Is it Safe?)",
            "url": "https://www.kidney.org/news-stories/coffee-and-kidney-disease-it-safe"
          }
        ],
        "stages": {
          "stage1_2": {
            "level": "safe",
            "advice": "ดื่มได้ตามปกติ ไม่เกิน 2-3 แก้ว/วัน"
          },
          "stage3": {
            "level": "caution",
            "advice": "ดื่มกาแฟดำ ไม่เกิน 1-2 แก้ว/วัน"
          },
          "stage4_5_pre": {
            "level": "caution",
            "advice": "จำกัดเป็นกาแฟดำเท่านั้น ไม่เกิน 1 แก้ว/วัน"
          },
          "dialysis": {
            "level": "caution",
            "advice": "นับรวมในโควตาน้ำดื่มประจำวัน"
          }
        }
      }
    },
    "reason": "กาแฟดำมีโพแทสเซียมไม่สูงมากหากดื่มในปริมาณพอเหมาะ แต่หากใส่นมหรือครีมเทียมจะเพิ่มฟอสฟอรัสและโพแทสเซียมตามไปด้วย ⚠️ หลีกเลี่ยงกาแฟ 3-in-1 หรือกาแฟกระป๋องสำเร็จรูป เพราะมีครีมเทียม ไขมันทรานส์ และสารฟอสเฟตสังเคราะห์",
    "advice": "ดื่มกาแฟดำแทนกาแฟใส่นม จำกัดไม่เกินวันละ 1-2 แก้ว",
    "source": {
      "name": "National Kidney Foundation (บทความ Coffee and Kidney Disease: Is it Safe?)",
      "url": "https://www.kidney.org/news-stories/coffee-and-kidney-disease-it-safe"
    },
    "stages": {
      "stage1_2": {
        "level": "safe",
        "advice": "ดื่มได้ตามปกติ ไม่เกิน 2-3 แก้ว/วัน"
      },
      "stage3": {
        "level": "caution",
        "advice": "ดื่มกาแฟดำ ไม่เกิน 1-2 แก้ว/วัน"
      },
      "stage4_5_pre": {
        "level": "caution",
        "advice": "จำกัดเป็นกาแฟดำเท่านั้น ไม่เกิน 1 แก้ว/วัน"
      },
      "dialysis": {
        "level": "caution",
        "advice": "นับรวมในโควตาน้ำดื่มประจำวัน"
      }
    }
  }
];
