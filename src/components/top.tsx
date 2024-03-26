import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { GenerateQR } from "./generateQR";
import { socials } from "../sns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTop } from "@/hooks/useTop";

const Top: React.FC = () => {
  // フォームのルールを定義
  const formSchema = z.object({
    URL: z.string(),
    userId: z.string().min(1, {
      message: "User ID must be at least 1 character.",
    }),
  });

  // フォームの初期値とバリデーションルールを設定
  const form = useForm<z.infer<typeof formSchema>>({
    // 外部のバリエーションライブラリを使う場合は、resolver に渡す
    resolver: zodResolver(formSchema),
    defaultValues: {
      URL: "",
      userId: "",
    },
  });

  const topHooks = useTop();

  // フォームの送信時に実行
  function onSubmit(values: z.infer<typeof formSchema>) {
    topHooks.generateQRcode(topHooks.social, values.userId);
    form.reset();
  }

  return (
    <div className="p-10 flex flex-col gap-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <div>
            <Select onValueChange={topHooks.onSelected}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select SNS" />
              </SelectTrigger>
              <SelectContent>
                {socials.map((social, index) => (
                  <SelectItem value={social.service} key={index}>
                    {social.service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-3">
            <FormField
              name="URL"
              render={() => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your URL"
                      aria-label="url"
                      type="text"
                      value={`${topHooks.social.url || topHooks.emptyUrl}${topHooks.userId || ""}`}
                      onChange={(e) => topHooks.urlHandler(e.target.value)}
                      disabled={topHooks.isInputUrlDisabled}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              // form.controlは、React Hook Formを使用してフォームフィールドの登録、値の取得、バリデーションといった操作を統合的に扱うためのコントロールオブジェクト
              control={form.control}
              name="userId"
              // fieldは特定の入力フィールドに関連するメソッドとプロパティを保持している(onChange, onBlur, value, name, ref)
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your userId"
                      aria-label="userId"
                      type="text"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        topHooks.idHandler(e.target.value);
                      }}
                      className="flex-1"
                      disabled={topHooks.isInputIdDisabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="flex-none bg-gray-800">
              Generate QR
            </Button>
          </div>
        </form>
      </Form>
      {topHooks.isDisplayQR && (
        <GenerateQR
          url={topHooks.completeUrl || topHooks.emptyUrl}
          social={topHooks.social}
        />
      )}
    </div>
  );
};

export { Top };
