
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  fathersName: z.string().nonempty("Father's Name is required"),
  mothersName: z.string().nonempty("Mother's Name is required"),
  address: z.string().nonempty("Address is required"),
  pinCode: z.string().nonempty("PIN Code is required"),
  parentMobileNumber: z.string().nonempty("Parent Mobile Number is required"),
  feesStatus: z.enum(["paid", "unpaid", "partial"], {
    required_error: "Fees Status is required",
  }),
});

export default function FormExample() {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 ml-32">
        <h2 className="text-2xl font-semibold ml-[6rem] mt-5 text-black">Student Information Form</h2>

        <FormItem>
          <FormLabel>First Name</FormLabel>
          <FormControl>
            <FormField name="firstName" control={methods.control} render={({ field }) => <Input {...field} type="text" />} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Last Name</FormLabel>
          <FormControl>
            <FormField name="lastName" control={methods.control} render={({ field }) => <Input {...field} type="text" />} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Father's Name</FormLabel>
          <FormControl>
            <FormField name="fathersName" control={methods.control} render={({ field }) => <Input {...field} type="text" />} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Mother's Name</FormLabel>
          <FormControl>
            <FormField name="mothersName" control={methods.control} render={({ field }) => <Input {...field} type="text" />} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Address</FormLabel>
          <FormControl>
            <FormField name="address" control={methods.control} render={({ field }) => <Textarea {...field} />} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>PIN Code</FormLabel>
          <FormControl>
            <FormField name="pinCode" control={methods.control} render={({ field }) => <Input {...field} type="text" />} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Parent Mobile Number</FormLabel>
          <FormControl>
            <FormField name="parentMobileNumber" control={methods.control} render={({ field }) => <Input {...field} type="tel" />} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem>
          <FormLabel>Fees Status</FormLabel>
          <FormControl>
            <FormField
              name="feesStatus"
              control={methods.control}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[500px]">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="unpaid">Unpaid</SelectItem>
                    <SelectItem value="partial">Partial</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <Button type="submit" variant="outlineBlack">Submit</Button>
      </form>
    </Form>
  );
}