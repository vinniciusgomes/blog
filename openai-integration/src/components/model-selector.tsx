"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

type ModelSelectorProps = {
  onValueChange(value: string): void;
  defaultValue?: string;
};

export function ModelSelector({
  onValueChange,
  defaultValue,
}: ModelSelectorProps) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="model">Model</Label>
      </div>
      <Select defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger id="model">
          <SelectValue placeholder="Select a GPT model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>CHAT</SelectLabel>
            <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
            <SelectItem value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</SelectItem>
            <SelectItem value="gpt-3.5-turbo-0125">
              gpt-3.5-turbo-0125
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
