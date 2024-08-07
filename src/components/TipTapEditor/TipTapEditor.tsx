"use client";

import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Text from "@tiptap/extension-text";
import Highlight from "@tiptap/extension-highlight";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
import "./TipTapEditor.css";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import Code from "@tiptap/extension-code";

import Link from "@tiptap/extension-link";

import { EditorContent, useEditor } from "@tiptap/react";
import Heading from "@tiptap/extension-heading";

import CharacterCount from "@tiptap/extension-character-count";

import { ReactNodeViewRenderer } from "@tiptap/react";
import CodeBlockComponent from "./CodeBlockComponent";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, all } from "lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import python from "highlight.js/lib/languages/python";

// Create a lowlight instance
const lowlight = createLowlight(all);

// Register individual languages
lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", javascript);
lowlight.register("javascript", javascript);
lowlight.register("ts", typescript);
lowlight.register("typescript", typescript);
lowlight.register("python", python);

import {
  Bold,
  CodeXml,
  Italic,
  MessageSquareQuote,
  List,
  Minus,
  Pilcrow,
  RemoveFormatting,
  Strikethrough,
  Undo2,
  Redo2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ListOrdered,
  SeparatorHorizontal,
  Code as CodeIcon,
  ListTodo,
  IndentIncrease,
  IndentDecrease,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Baseline,
  Highlighter,
  Link2,
  Link2Off,
  Eraser,
} from "lucide-react";
import { Alert } from "../ui/alert";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  const setLink = useCallback(() => {
    if (!editor) {
      return null;
    }

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className=" sticky top-0 py-2 z-50 bg-background">
      <div className="flex flex-row gap-2 flex-wrap">
        {/* color and highlight */}
        <Alert className="flex flex-row p-1 m-0 w-fit gap-1 ">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-[.35rem] m-0 h-fit w-fit">
                <Baseline
                  className="w-5 h-5 flex-none"
                  style={{
                    color: editor.getAttributes("textStyle").color,
                  }}
                ></Baseline>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit h-fit p-1 m-0 mt-2">
              <ToggleGroup
                type="single"
                value={editor.getAttributes("textStyle").color || "default"}
                className="flex flex-col gap-1"
              >
                <ToggleGroupItem
                  value="#e11d48"
                  aria-label="toggle rose"
                  onClick={() =>
                    editor.chain().focus().setColor("#e11d48").run()
                  }
                  className="w-full flex items-center"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#e11d48" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#7c3aed"
                  aria-label="toggle violet"
                  onClick={() =>
                    editor.chain().focus().setColor("#7c3aed").run()
                  }
                  className="w-full flex items-center"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#7c3aed" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#2563eb"
                  aria-label="toggle blue"
                  onClick={() =>
                    editor.chain().focus().setColor("#2563eb").run()
                  }
                  className="w-full flex items-center"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#2563eb" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#10b981"
                  aria-label="toggle emerald"
                  onClick={() =>
                    editor.chain().focus().setColor("#10b981").run()
                  }
                  className="w-full flex items-center"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#10b981" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#f59e0b"
                  aria-label="toggle amber"
                  onClick={() =>
                    editor.chain().focus().setColor("#f59e0b").run()
                  }
                  className="w-full flex items-center"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#f59e0b" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#737373"
                  aria-label="toggle neutral"
                  onClick={() =>
                    editor.chain().focus().setColor("#737373").run()
                  }
                  className="w-full flex items-center"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#737373" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#fafafa"
                  aria-label="toggle white"
                  onClick={() =>
                    editor.chain().focus().setColor("#fafafa").run()
                  }
                  className="w-full flex items-center"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#fafafa" }}
                  ></div>
                </ToggleGroupItem>
              </ToggleGroup>
            </PopoverContent>
          </Popover>
          {/* highlight */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="p-[.35rem] m-0 h-fit w-fit"
                style={{
                  color: editor.getAttributes("highlight").color || "#fff",
                }}
              >
                <Highlighter className="w-5 h-5 flex-none" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit h-fit p-1 m-0 mt-2">
              <ToggleGroup
                type="single"
                value={editor.getAttributes("highlight").color}
                className="flex flex-col gap-1"
              >
                <ToggleGroupItem
                  value="#e11d48"
                  aria-label="toggle rose highlight"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHighlight({ color: "#e11d48" })
                      .run()
                  }
                  className="w-full flex justify-start"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#e11d48" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#7c3aed"
                  aria-label="toggle violet highlight"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHighlight({ color: "#7c3aed" })
                      .run()
                  }
                  className="w-full flex justify-start"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#7c3aed" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#2563eb"
                  aria-label="toggle blue highlight"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHighlight({ color: "#2563eb" })
                      .run()
                  }
                  className="w-full flex justify-start"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#2563eb" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#10b981"
                  aria-label="toggle emerald highlight"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHighlight({ color: "#10b981" })
                      .run()
                  }
                  className="w-full flex justify-start"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#10b981" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#f59e0b"
                  aria-label="toggle amber highlight"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHighlight({ color: "#f59e0b" })
                      .run()
                  }
                  className="w-full flex justify-start"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#f59e0b" }}
                  ></div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="#737373"
                  aria-label="toggle neutral highlight"
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHighlight({ color: "#737373" })
                      .run()
                  }
                  className="w-full flex justify-start"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#737373" }}
                  ></div>
                </ToggleGroupItem>
              </ToggleGroup>
            </PopoverContent>
          </Popover>
        </Alert>

        {/* styles like bold, italic, strikethrough, etc. */}
        <Alert className="flex flex-row p-1 m-0 h-fit w-fit gap-1">
          <Toggle
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            pressed={editor.isActive("bold")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Bold className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            pressed={editor.isActive("italic")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Italic className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            pressed={editor.isActive("strike")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Strikethrough className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            pressed={editor.isActive("code")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <CodeIcon className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            pressed={editor.isActive("codeBlock")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <CodeXml className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            pressed={editor.isActive("blockquote")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <MessageSquareQuote className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={setLink}
            pressed={editor.isActive("link")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Link2 className="w-5 h-5 flex-none" />
          </Toggle>
          {/* <Toggle
            onClick={() => editor.chain().focus().unsetLink().run()}
            disabled={!editor.isActive("link")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Link2Off className="w-5 h-5 flex-none" />
          </Toggle> */}
        </Alert>

        {/* formatting like paragraph, heading, list, etc. */}
        <Alert className="flex flex-row p-1 m-0 h-fit w-fit gap-1">
          {/* <Toggle
          onClick={() => editor.chain().focus().setParagraph().run()}
          pressed={editor.isActive("paragraph")}
        >
          <Pilcrow className="w-5 h-5 flex-none" />
        </Toggle> */}
          <Toggle
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            pressed={editor.isActive("heading", { level: 1 })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Heading1 className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            pressed={editor.isActive("heading", { level: 2 })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Heading2 className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            pressed={editor.isActive("heading", { level: 3 })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Heading3 className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            pressed={editor.isActive("heading", { level: 4 })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Heading4 className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            pressed={editor.isActive("heading", { level: 5 })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Heading5 className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            pressed={editor.isActive("heading", { level: 6 })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Heading6 className="w-5 h-5 flex-none" />
          </Toggle>
        </Alert>

        {/* list like bullet, ordered, task, etc. */}
        <Alert className="flex flex-row p-1 m-0 h-fit w-fit gap-1">
          <Toggle
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            pressed={editor.isActive("bulletList")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <List className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            pressed={editor.isActive("orderedList")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <ListOrdered className="w-5 h-5 flex-none" />
          </Toggle>

          <Toggle
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            pressed={editor.isActive("taskList")}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <ListTodo className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() =>
              editor.chain().focus().sinkListItem("taskItem").run()
            }
            disabled={!editor.can().sinkListItem("taskItem")}
            pressed={editor.isActive("taskItem", { nested: true })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <IndentIncrease className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() =>
              editor.chain().focus().liftListItem("taskItem").run()
            }
            disabled={!editor.can().liftListItem("taskItem")}
            pressed={editor.isActive("taskItem", { nested: true })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <IndentDecrease className="w-5 h-5 flex-none" />
          </Toggle>
        </Alert>

        {/* alignment like left, center, right, etc. */}
        <Alert className="flex flex-row p-1 m-0 h-fit w-fit gap-1">
          <Toggle
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            pressed={editor.isActive({ textAlign: "left" })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <AlignLeft className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            pressed={editor.isActive({ textAlign: "center" })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <AlignCenter className="w-5 h-5 flex-none" />
          </Toggle>
          <Toggle
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            pressed={editor.isActive({ textAlign: "right" })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <AlignRight className="w-5 h-5 flex-none" />
          </Toggle>
          {/* <Toggle
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            pressed={editor.isActive({ textAlign: "justify" })}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <AlignJustify className="w-5 h-5 flex-none" />
          </Toggle> */}
        </Alert>

        {/* horizontal rule */}
        <Alert className="flex flex-row p-1 m-0 h-fit w-fit gap-1">
          <Button
            variant="ghost"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Minus className="w-5 h-5 flex-none" />
          </Button>
          <Button
            variant="ghost"
            onClick={() => editor.chain().focus().setHardBreak().run()}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <SeparatorHorizontal className="w-5 h-5 flex-none" />
          </Button>
        </Alert>

        {/* undo, redo, etc. */}
        <Alert className="flex flex-row p-1 m-0 h-fit w-fit gap-1">
          <Button
            variant="ghost"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Undo2 className="w-5 h-5 flex-none" />
          </Button>
          <Button
            variant="ghost"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Redo2 className="w-5 h-5 flex-none" />
          </Button>
        </Alert>

        {/* other like unset all marks, clear nodes, etc. */}
        <Alert className="flex flex-row p-1 m-0 h-fit w-fit gap-1">
          <Button
            variant="ghost"
            onClick={() =>
              editor.chain().focus().unsetAllMarks().clearNodes().run()
            }
            className="p-[.35rem] m-0 h-fit w-fit"
          >
            <Eraser className="w-5 h-5 flex-none" />
          </Button>
        </Alert>

        <Alert className="flex flex-row p-1 px-2 m-0 h-fit w-fit gap-1">
          <div className="text-xs text-muted-foreground">
            {editor.storage.characterCount.words()} words
            <br />
            {editor.storage.characterCount.characters()} charcters
          </div>
        </Alert>
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Paragraph,
  Text,
  TaskList,
  TextAlign,
  TaskItem.configure({
    nested: true,
  }),
  Document,
  Paragraph,
  Text,
  CodeBlockLowlight.extend({
    addNodeView() {
      return ReactNodeViewRenderer(CodeBlockComponent);
    },
  }).configure({
    lowlight,
    defaultLanguage: null,
  }),
  Heading,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Document,
  Paragraph,
  Text,
  Highlight.configure({ multicolor: true }),
  Link,
  CharacterCount,
];

interface TipTapEditorProps {
  initialContent: string;
}

// Update the TipTapEditor component to accept props
export const TipTapEditor: React.FC<TipTapEditorProps> = ({
  initialContent,
}) => {
  return (
    <div className="prose max-w-none prose-headings:mt-0">
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={initialContent}
      ></EditorProvider>
    </div>
  );
};
