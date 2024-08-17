import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export default function SideBar() {
  return (
    <div className="hidden lg:block w-64 border-r">
      <div className=" flex flex-col p-4">
        <div className="border-b">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <div className="container border w-[80%] my-6">
                <AccordionTrigger>Filters</AccordionTrigger>
              </div>
              <AccordionContent className="text-base">
                <div className="container border-t">
                  <Accordion
                    type="single"
                    defaultValue="item-1"
                    className="container"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="my-4">
                        <span>
                          CATEGORY
                          <span className="text-muted-foreground text-xs ml-3">
                            カテゴリーを選ぶ
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <RadioGroup defaultValue="04" className="mb-10">
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="04" id="04" />
                            <Label
                              htmlFor="04"
                              className="text-base w-[100%] flex justify-between items-center py-1"
                            >
                              <div>
                                人物
                                <span className="text-muted-foreground text-xs ml-3">
                                  キャラクター
                                </span>
                              </div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>

                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="05" id="05" />
                            <Label
                              htmlFor="05"
                              className="text-base w-[100%] flex justify-between items-center py-1"
                            >
                              <div>
                                能力
                                <span className="text-muted-foreground text-xs ml-3">
                                  スキル
                                </span>
                              </div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="06" id="06" />
                            <Label
                              htmlFor="06"
                              className="text-base w-[100%] flex justify-between items-center py-1"
                            >
                              <div>
                                魔法
                                <span className="text-muted-foreground text-xs ml-3">
                                  マジック
                                </span>
                              </div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="07" id="07" />
                            <Label
                              htmlFor="07"
                              className="text-base w-[100%] flex justify-between items-center py-1"
                            >
                              <div>
                                技術
                                <span className="text-muted-foreground text-xs ml-3">
                                  アーツ
                                </span>
                              </div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="08" id="08" />
                            <Label
                              htmlFor="08"
                              className="text-base w-[100%] flex justify-between items-center py-1"
                            >
                              <div>
                                存在値
                                <span className="text-muted-foreground text-xs ml-3">
                                  エネルギー
                                </span>
                              </div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="09" id="09" />
                            <Label
                              htmlFor="09"
                              className="text-base w-[100%] flex justify-between items-center py-1"
                            >
                              <div>
                                武具
                                <span className="text-muted-foreground text-xs ml-3">
                                  ウェポン
                                </span>
                              </div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="10" id="10" />
                            <Label
                              htmlFor="10"
                              className="text-base w-[100%] flex justify-between items-center py-1"
                            >
                              <div>
                                組織
                                <span className="text-muted-foreground text-xs ml-3">
                                  グループ
                                </span>
                              </div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="11" id="11" />
                            <Label
                              htmlFor="11"
                              className="text-base w-[100%] flex justify-between items-center py-1"
                            >
                              <div>
                                魔物
                                <span className="text-muted-foreground text-xs ml-3">
                                  モンスター
                                </span>
                              </div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                        </RadioGroup>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="container border-t">
                  <Accordion
                    type="single"
                    defaultValue="item-1"
                    className="container"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="my-4">
                        <span>
                          SORT BY
                          <span className="text-muted-foreground text-xs ml-3">
                            並び替え
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <RadioGroup defaultValue="01" className="mb-10">
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="01" id="01" />
                            <Label
                              htmlFor="01"
                              className="text-base w-[100%] py-2"
                            >
                              更新順
                            </Label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="02" id="02" />
                            <Label
                              htmlFor="02"
                              className="text-base w-[100%] py-1"
                            >
                              人気順
                            </Label>
                          </div>
                          <div className="flex items-center space-x-4">
                            <RadioGroupItem value="03" id="03" />
                            <Label
                              htmlFor="03"
                              className="text-base w-[100%] py-1"
                            >
                              五十音順
                            </Label>
                          </div>
                        </RadioGroup>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="container border-t">
                  <Accordion
                    type="single"
                    defaultValue="item-1"
                    className="container"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="my-4">
                        <span>
                          TAG
                          <span className="text-muted-foreground text-xs ml-3">
                            タグで絞り込む
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="mb-10">
                          <div className="flex space-x-4 items-center">
                            <Checkbox id="13" />
                            <Label
                              htmlFor="13"
                              className="text-base w-[100%] flex justify-between items-center py-2"
                            >
                              <div>魔物｜モンスター</div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                          <div className="flex space-x-4 items-center">
                            <Checkbox id="14" />
                            <Label
                              htmlFor="14"
                              className="text-base w-[100%] flex justify-between items-center py-2"
                            >
                              <div>魔物｜モンスター</div>
                              <div className="text-muted-foreground text-xs">
                                500
                              </div>
                            </Label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
