"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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
    "title": "แบบประเมินความพึงพอใจต่อการใช้บริการรถโดยสารพลังงานไฟฟ้า EV Bus",
    "picture": "",
    "objective": "การรับฟังเสียงครั้งนี้ เพื่อนำสารสนเทศมายกระดับคุณภาพการให้บริการของ \"รถโดยสารพลังงานไฟฟ้า EV Bus\" ให้ตอบสนองความคาดหวัง สร้างความสัมพันธ์ที่ดีในระยะยาว และเสริมสร้างประสบการณ์ที่ดีให้กับนักเรียน นิสิต บุคลากร รวมถึงผู้ใช้บริการอื่น",
    "description": "โปรดระบุเลือกช่องที่ตรงกับความเป็นจริง และความรู้สึก/ความคิดเห็นของท่านมากที่สุด",
    "pages": [
        {
            "name": "ส่วนที่ 1 คำถามทั่วไป",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "q1_1",
                    "title": "1.1 เพศ",
                    "choices": [
                        { "value": "M", "text": "ชาย" },
                        { "value": "F", "text": "หญิง" },
                        { "value": "-", "text": "ไม่ระบุ" },
                    ],
                    "isRequired": true,
                },
                {
                    "type": "radiogroup",
                    "name": "q1_2",
                    "title": "1.2 ประเภท",
                    "choices": [
                        { "value": "1", "text": "นิสิต" },
                        { "value": "2", "text": "บุคลากร" },
                        { "value": "3", "text": "อื่น ๆ" },
                    ]
                },

            ]
        },

        {
            "name": "ส่วนที่ 2 ",
            "elements": [
                {
                    "type": "matrix",
                    "name": "q2_1",
                    "title": "2.1 ความพึงพอใจต่อ \"การจราจรภายในเขตพื้นที่\"",
                    "isRequired": true,
                    "columns": [
                        {
                            "value": "5",
                            "text": "มากที่สุด"
                        },
                        {
                            "value": "4",
                            "text": "มาก"
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
                            "text": "น้อยที่สุด"
                        }
                    ],
                    "rows": [
                        {
                            "value": "Row1",
                            "text": "1. ความสะดวกในการเดินทางภายในมหาวิทยาลัย"
                        },
                        {
                            "value": "Row2",
                            "text": "2. ความเพียงพอของที่จอดรถ (รถยนต์)"
                        },
                        {
                            "value": "Row3",
                            "text": "3. สภาพในตลาดน้อย (เช่น ระบบระบายอากาศ แสงสว่าง เพียงพอและเหมาะสม)"
                        },
                    ]
                },

                {
                    "type": "checkbox",
                    "name": "q2_2",
                    "title": "2.2 ท่านมีความประทับในข้อใดบ้าง (เลือกได้มากกว่า 1 รายการ)",
                    "choices": [
                        {
                            "value": "ความสะอาด",
                            "text": "ความสะอาด"
                        },
                        {
                            "value": "รสชาดเยี่ยม",
                            "text": "รสชาดเยี่ยม"
                        },
                        {
                            "value": "บรรยากาศดี",
                            "text": "บรรยากาศดี"
                        },
                        {
                            "value": "บริการดี",
                            "text": "บริการดี"
                        }
                    ],
                    "showOtherItem": true,
                    "otherText": "อื่น ๆ (โปรดระบุ)"
                },



            ]
        },

        {
            "name": "ส่วนที่ 3 ",
            "elements": [
                {
                    "type": "text",
                    "name": "question7",
                    "title": "3.1 ข้อเสนอแนะ",
                },
            ]
        },
    ]


}


const SurveyPage = () => {

    const [responses, setResponses] = useState<Responses>({});
    // const [otherText, setOtherText] = useState<string>("");

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
            let selectedValues = prev[questionName] || "";
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
                                                        className="flex flex-col space-y-1 p-3"
                                                    >
                                                        {element.choices?.map((choice: Choice, choiceIndex: number) => (
                                                            <div key={choiceIndex} className="flex items-center space-x-2">
                                                                <RadioGroupItem value={choice.value} id={`${element.name}-${choice.value}`} />
                                                                <Label className='cursor-pointer' htmlFor={`${element.name}-${choice.value}`}>{choice.text}</Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </div>
                                            )}






                                            {/* matrix */}
                                            {element.type === 'matrix' && (
                                                <div>
                                                    <h3 className="text-lg font-bold">{element.title}</h3>

                                                    <div className='hidden grid-cols-2 md:grid p-3'>
                                                        <div></div>
                                                        <RadioGroup>
                                                            <div className='flex justify-around items-center'>
                                                                {element.columns?.map((column,columnIndex) => (
                                                                    <div key={columnIndex} className='flex items-center'><Label htmlFor='' className='ps-2 inline-block'>{column.text}</Label></div>
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
                                                                <div className='grid grid-cols-1 md:grid-cols-2 items-center hover:bg-slate-100'>
                                                                    <div className='p-3'>
                                                                        {row.text}
                                                                    </div>
                                                                    <div className='flex flex-col items-start sm:flex-row  justify-around sm:items-center p-3 '>
                                                                        {element.columns?.map((column, columnIndex) => (
                                                                            <div key={columnIndex} className="text-center">
                                                                                <div className="flex items-center space-x-2 py-1">
                                                                                    <RadioGroupItem
                                                                                        value={column.value}
                                                                                        id={`${element.name}-${row.value}-${column.value}`}

                                                                                    />
                                                                                    <Label className='cursor-pointer inline-block md:hidden' htmlFor={`${element.name}-${row.value}-${column.value}`}>{column.text}</Label>
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