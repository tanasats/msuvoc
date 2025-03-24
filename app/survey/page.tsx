"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React, { useState } from 'react'

interface Choice {
    value: string;
    text: string;
}

interface Element {
    type: string;
    name: string;
    title?: string;
    choices?: Choice[];
    columns?: Choice[];
    rows?: Choice[];
    isRequired?: boolean;
    showOtherItem?: boolean;
    otherText?: string;
}

interface Page {
    name: string;
    elements: Element[];
}

interface Survey {
    id: string;
    title: string;
    picture: string;
    objective: string;
    description: string;
    pages: Page[];
}

interface Responses {
    [key: string]: string;
}



const survey1: Survey = {
    "id":"1",
    "title": "แบบประเมินความพึงพอใจต่อการใช้บริการ \"รถโดยสารพลังงานไฟฟ้า EV Bus มหาวิทยาลัยมหาสารคาม\" ",
    "picture": "",
    "objective": "การรับฟังเสียงครั้งนี้ เพื่อนำสารสนเทศมายกระดับคุณภาพการให้บริการของ \"รถโดยสารพลังงานไฟฟ้า EV Bus\" ให้ตอบสนองความคาดหวัง สร้างความสัมพันธ์ที่ดีในระยะยาว และเสริมสร้างประสบการณ์ที่ดีให้กับนักเรียน นิสิต บุคลากร ของ มมส. รวมถึงผู้ใช้บริการอื่น",
    "description": "โปรดระบุเลือกช่องที่ตรงกับความเป็นจริง และความรู้สึก/ความคิดเห็นของท่านมากที่สุด",
    "pages": [
        {
            "name": "ส่วนที่ 1 ข้อมูลทั่วไป",
            "elements": [
                {
                    "name": "q1_1",
                    "type": "radiogroup",
                    "title": "1.1 เพศ",
                    "choices": [
                        { "value": "M", "text": "ชาย" },
                        { "value": "F", "text": "หญิง" },
                        { "value": "-", "text": "LGBTQ" },
                    ],
                    "isRequired": true,
                },
                {
                    "name": "q1_2",
                    "type": "radiogroup",
                    "title": "1.2 ประเภทผู้ใช้บริการ",
                    "choices": [
                        { "value": "1", "text": "นักเรียนสาธิต มมส (ประถม)" },
                        { "value": "2", "text": "นักเรียนสาธิต มมส (มัธยม)" },
                        { "value": "3", "text": "นิสิต (ป.ตรี)" },
                        { "value": "4", "text": "นิสิต (ป.โท)" },
                        { "value": "5", "text": "นิสิต (ป.เอก)" },
                        { "value": "6", "text": "บุคลากรสายสนับสนุน" },
                        { "value": "7", "text": "อาจารย์" },
                        { "value": "8", "text": "ผู้บริหาร" },
                        { "value": "9", "text": "ผู้ปกครอง หรือประชาชนทั่วไป" },
                        { "value": "10", "text": "ผู้มาเยือนมหาวิทยาลัยมหาสารคาม (Guest)" },
                    ]
                },

            ]
        },

        {
            "name": "ส่วนที่ 2 ความพึงพอใจ",
            "elements": [
                {
                    "name": "q2_1",
                    "type": "matrix",
                    "title": "2.1 ด้านสภาพยานพาหนะ",
                    "isRequired": true,
                    "columns": [
                        {
                            "value": "5",
                            "text": "ดีมาก"
                        },
                        {
                            "value": "4",
                            "text": "ดี"
                        },
                        {
                            "value": "3",
                            "text": "ปานกลาง"
                        },
                        {
                            "value": "2",
                            "text": "น้อย"
                        },
                        {
                            "value": "1",
                            "text": "ควรปรับปรุง"
                        }
                    ],
                    "rows": [
                        {
                            "value": "Row1",
                            "text": "1. สภาพยานพาหนะ"
                        },
                        {
                            "value": "Row2",
                            "text": "2. ความสะอาดภายในยานพาหนะ"
                        },
                        {
                            "value": "Row3",
                            "text": "3. ระบบปรับอากาศในยานพาหนะ"
                        },
                        {
                            "value": "Row4",
                            "text": "4. ระบบเครื่องเสียง"
                        },
                    ]
                },
                {
                    "name": "q2_2",
                    "type": "matrix",
                    "title": "2.2 ด้านพนักงานขับรถ",
                    "isRequired": true,
                    "columns": [
                        {
                            "value": "5",
                            "text": "ดีมาก"
                        },
                        {
                            "value": "4",
                            "text": "ดี"
                        },
                        {
                            "value": "3",
                            "text": "ปานกลาง"
                        },
                        {
                            "value": "2",
                            "text": "น้อย"
                        },
                        {
                            "value": "1",
                            "text": "ควรปรับปรุง"
                        }
                    ],
                    "rows": [
                        {
                            "value": "Row1",
                            "text": "1. การแต่งกาย  สุภาพเรียบร้อย"
                        },
                        {
                            "value": "Row2",
                            "text": "2. มารยาทในการขับขี่และความปลอดภัย"
                        },
                        {
                            "value": "Row3",
                            "text": "3. การใช้วาจา มารยาทของพนักงานขับรถ"
                        },
                        {
                            "value": "Row4",
                            "text": "4. ความกระตือรือร้นในการให้บริการ"
                        },
                    ]
                },
                {
                    "name": "q2_3",
                    "type": "matrix",
                    "title": "2.3 ด้านเส้นทางการให้บริการ",
                    "isRequired": true,
                    "columns": [
                        {
                            "value": "5",
                            "text": "ดีมาก"
                        },
                        {
                            "value": "4",
                            "text": "ดี"
                        },
                        {
                            "value": "3",
                            "text": "ปานกลาง"
                        },
                        {
                            "value": "2",
                            "text": "น้อย"
                        },
                        {
                            "value": "1",
                            "text": "ควรปรับปรุง"
                        }
                    ],
                    "rows": [
                        {
                            "value": "Row1",
                            "text": "1. เส้นทางการให้บริการมีความเหมาะสม"
                        },
                        {
                            "value": "Row2",
                            "text": "2. ระยะเวลาการเดินทางมีความเหมาะสม"
                        },
                        {
                            "value": "Row3",
                            "text": "3. จุดจอดรถ รับ-ส่ง มีความเหมาะสม"
                        },

                    ]
                },                


            ]
        },

        {
            "name": "ส่วนที่ 3 ความคิดเห็น",
            "elements": [
                {
                    "name": "q3_1",
                    "type": "radiogroup",
                    "title": "3.1 ท่านเห็นควรให้มีบริการต่อหรือไม่",
                    "choices": [
                        { "value": "ควรมีบริการต่อไป", "text": "ควรมีบริการต่อไป" },
                        { "value": "ไม่ควรมีบริการต่อ", "text": "ไม่ควรมีบริการต่อ" },
                    ],
                    "isRequired": true,
                },
                {
                    "name": "q3_2",
                    "type": "text",
                    "title": "3.2 ข้อเสนอแนะอื่นๆเพื่อประโยชน์ต่อการปรับปรุงการให้บริการ",
                },
            ]
        },
    ]


}


const SurveyPage = () => {

    const [responses, setResponses] = useState<Responses>({});
    const [otherText, setOtherText] = useState<string>("");

    const handleRadioChange = (questionName: string, value: string) => {
        setResponses(prev => ({ ...prev, [questionName]: value }));
    };

    const handleInputChange = (questionName: string, value: string) => {
        setResponses(prev => ({ ...prev, [questionName]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("แบบสอบถามถูกส่ง:", responses);
    };

    const handleOtherTextChange = (questionName: string, value: string) => {
        //setOtherText(value);
        setResponses(prev => ({ ...prev, [questionName]: value }));
    };

    const handleResetForm = () => {
        console.log("reset form");
        setResponses({});
    }

    // const handleCheckboxChange = (questionName: string, value: string, checked: boolean) => {
    //     setResponses((prev: Responses) => {
    //         const selectedValues = prev[questionName] ? [...prev[questionName]] : [];
    //         if (checked) {
    //             selectedValues.push(value);
    //         } else {
    //             const index = selectedValues.indexOf(value);
    //             if (index > -1) {
    //                 selectedValues.splice(index, 1);
    //             }
    //         }
    //         return { ...prev, [questionName]: selectedValues };
    //     });
    // };

    const handleCheckboxChange = (questionName: string, value: string, checked: boolean) => {
        setResponses((prev: Responses) => {
            var selectedValues = prev[questionName] || "";
            if (checked) {
                selectedValues += value + ",";
            } else {
                selectedValues = selectedValues.replace(value + ",", "")
            }
            return { ...prev, [questionName]: selectedValues };
        });
    };





    //   const handleOtherTextChange = (value: string) => {
    //     setOtherText(value);
    //   };





    return (
        <div className='mx-auto'>
            <div className='bg-blue-950 h-[10vh]'></div>




            <div className="container mx-auto p-4">





                <form onSubmit={handleSubmit}>
                    <Card className="w-full max-w-5xl mx-auto">
                        <div className='text-2xl p-5 font-bold border-b-2 bg-sky-100 rounded-t-lg'>{survey1.title}</div>
                        <CardHeader>
                            วัตถุประสงค์
                            <p className="text-sm text-gray-500 indent-5">{survey1.objective}</p>
                            คำชี้แจง
                            <p className="text-sm text-gray-500 mt-2 indent-5">{survey1.description}</p>
                        </CardHeader>
                        <CardContent>

                            {survey1.pages.map((page, pageIndex) => (
                                <div key={pageIndex}>
                                    <h2 className="text-xl font-semibold mb-4 bg-sky-100 p-2 rounded-lg">{page.name}</h2>
                                    {page.elements.map((element, elementIndex) => (
                                        <div key={elementIndex} className="mb-4">


                                            {/* radiogroup */}
                                            {element.type === 'radiogroup' && (
                                                <div>
                                                    <h3 className="text-lg font-bold mb-2">{element.title}
                                                        {element.isRequired && <span className='text-red-600 ps-1'>*</span>}
                                                    </h3>
                                                    <RadioGroup
                                                        onValueChange={(value) => handleRadioChange(`${element.name}`, value)}
                                                        className="flex flex-col gap-1"
                                                    >
                                                        {element.choices?.map((choice: Choice, choiceIndex: number) => (
                                                            <div key={choiceIndex} className="flex items-center space-x-2 hover:bg-slate-100 w-fit py-1 px-3 rounded-full">
                                                                <RadioGroupItem value={choice.value} id={`${element.name}-${choice.value}`} />
                                                                <label className='cursor-pointer' htmlFor={`${element.name}-${choice.value}`}>{choice.text}</label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </div>
                                            )}






                                            {/* matrix */}
                                            {element.type === 'matrix' && (
                                                <div>
                                                    <h3 className="text-lg font-bold">{element.title}</h3>

                                                    <div className='hidden grid-cols-2 md:grid px-3'>
                                                        <div></div>
                                                        <RadioGroup>
                                                            {/* <div className='flex justify-around'> */}
                                                            <div className='inline-grid grid-cols-5 gap-0'>
                                                                {element.columns?.map((column) => (
                                                                    <div className='flex items-center flex-grow'>
                                                                        <Label htmlFor='' className='ps-2 inline-block w-full text-center text-slate-500'>{column.text}</Label>
                                                                    </div>
                                                                ))}
                                                                
                                                            </div>
                                                        </RadioGroup>
                                                    </div>
                                                    <div>
                                                        {element.rows?.map((row, rowIndex) => (
                                                            <RadioGroup
                                                                key={rowIndex}
                                                                value={responses[`${element.name}-${row.value}`]}
                                                                onValueChange={(value) =>
                                                                    handleRadioChange(`${element.name}-${row.value}`, value)
                                                                }
                                                            >
                                                                <div className='grid grid-cols-1 md:grid-cols-2 items-center hover:bg-slate-100 rounded-lg'>
                                                                    <div className='p-3 pb-0'>
                                                                        {row.text}
                                                                    </div>
                                                                    <div className='flex flex-col items-start sm:flex-row  justify-around sm:items-center p-3 ps-6 sm:ps-0'>
                                                                        {element.columns?.map((column, columnIndex) => (
                                                                            <div key={columnIndex} className="text-center">
                                                                                <div className="flex items-center space-x-2 py-1">
                                                                                    <RadioGroupItem
                                                                                        value={column.value}
                                                                                        id={`${element.name}-${row.value}-${column.value}`}

                                                                                    />
                                                                                    <label className='cursor-pointer inline-block md:hidden' htmlFor={`${element.name}-${row.value}-${column.value}`}>{column.text}</label>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>



                                                            </RadioGroup>
                                                        ))}
                                                    </div>


                                                </div>
                                            )}
                                            {/* text */}
                                            {element.type === 'text' && (
                                                <div>
                                                    <Label htmlFor={element.name} className="block mb-2 text-lg font-bold">{element.title || `Question ${elementIndex + 1}`}
                                                        {element.isRequired && <span className='text-red-600 ps-1'>*</span>}
                                                    </Label>

                                                    <Input
                                                        type="text"
                                                        id={element.name}
                                                        name={element.name}
                                                        value={responses[element.name] || ''}
                                                        onChange={(e) => handleInputChange(element.name, e.target.value)}
                                                        className="w-full"
                                                    />
                                                </div>
                                            )}
                                            {/* checkbox */}
                                            {element.type === 'checkbox' && (
                                                <div>
                                                    <h3 className="text-lg font-bold mb-4">{element.title}</h3>
                                                    {element.choices?.map((choice: Choice, choiceIndex: number) => (
                                                        <div key={choiceIndex} className="flex items-center px-3 pb-2">
                                                            <Checkbox
                                                                id={`${element.name}-${choice.value}`}
                                                                onCheckedChange={(checked) =>
                                                                    handleCheckboxChange(`${element.name}`, choice.value, checked as boolean)
                                                                }
                                                            />
                                                            <Label className="ms-2 cursor-pointer" htmlFor={`${element.name}-${choice.value}`}>{choice.text}</Label>
                                                        </div>
                                                    ))}
                                                    <div className='flex items-center px-3 py-1'>
                                                        <Checkbox id={`${element.name}-other`} onCheckedChange={(checked) => {
                                                            handleCheckboxChange(`${element.name}`, "other", checked as boolean)
                                                        }} />
                                                        <Label className='ps-2 cursor-pointer' htmlFor={`${element.name}-other`}>อื่น ๆ (ระบุ)</Label>
                                                    </div>
                                                    {(responses[`${element.name}`] || '').includes("other") &&
                                                        <Input
                                                            type="text"
                                                            id={`${element.name}-comment`}
                                                            name={`${element.name}-comment`}
                                                            value={responses[`${element.name}-comment`] || ''}
                                                            onChange={(e) => handleOtherTextChange(`${element.name}-comment`, e.target.value)}
                                                            placeholder="กรุณาระบุ"
                                                            className="mt-2 w-full"
                                                        />}
                                                </div>
                                            )}



                                        </div>
                                    ))}
                                </div>
                            ))}
                        </CardContent>
                        <div className="border-t-2 border-slate-200 p-4 text-center">                            
                            <Button type="submit">ส่งแบบสอบถาม</Button>   
                            {/* <Button type="reset" onClick={()=>handleResetForm()}>Clear form</Button>                          */}
                        </div>
                    </Card>
                </form>



                {/* <Card className='p-5'>
                    <div className='flex-col md:flex'>
                        <div className=''>1.ข้อคำถาม</div>
                        <div className='block md:flex gap-5'>
                            <div>มากที่สุด</div>
                            <div>มาก</div>
                            <div>ปานกลาง</div>
                            <div>น้อย</div>
                            <div>น้อยที่สุด</div>
                        </div>
                    </div>
                </Card> */}


            </div>










        </div>
    )
}

export default SurveyPage