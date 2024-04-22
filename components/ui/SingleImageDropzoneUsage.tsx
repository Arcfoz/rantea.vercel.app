"use client";

import { SingleImageDropzone } from "@/components/SingleImageDropZone";
import { useState, useEffect } from "react";
import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

export function SingleImageDropzoneUsage() {
  const [file, setFile] = useState<File | null>(null);

  const [imageOptions, setImageOptions] = useState([
    { label: "Image 1 (BOPF3)", value: "demo/BOPF3.jpg" },
    { label: "Image 2 (BOPF4)", value: "demo/BOPF4.jpg" },
    { label: "Image 3 (BP3)", value: "demo/BP3.jpg" },
    { label: "Image 4 (BP4)", value: "demo/BP4.jpg" },
    { label: "Image 5 (BT3)", value: "demo/BT3.jpg" },
    { label: "Image 6 (BT4)", value: "demo/BT4.jpg" },
    { label: "Image 7 (DUST3)", value: "demo/DUST3.jpg" },
    { label: "Image 8 (DUST4)", value: "demo/DUST4.jpg" },
  ]);

  useEffect(() => {
    const responseElement = document.getElementById("response");
    if (responseElement) {
      responseElement.innerHTML = "";
    }
  }, [file]);

  const handleImageChange = async (value: string) => {
    if (value === "") {
      setFile(null);
    } else {
      // Fetch the file from your server or file system using the selected value
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${value}`);
      const fileBlob = await response.blob();
      const file = new File([fileBlob], value, {
        lastModified: Date.now(), // You can set the last modified date here
      });
      setFile(file);
    }
  };

  const handleFileChange = (file?: File) => {
    if (file) {
      setFile(file);
    } else {
      setFile(null);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <Select onValueChange={handleImageChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Image" />
          </SelectTrigger>
          <SelectContent>
            {imageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <SingleImageDropzone width={300} height={400} value={file ? file : undefined} onChange={handleFileChange} />

      <Button
        onClick={async () => {
          if (!file) {
            const responseElement = document.getElementById("response");
            if (responseElement) {
              responseElement.innerHTML = `<h1>No image selected</h1>`;
            }
            return;
          }

          const responseElement = document.getElementById("response");
          if (responseElement) {
            responseElement.innerHTML = `
            <h1">
          <span>Loading...</span>
          <span class="loading-spinner"></span>
        </h1>
            `;
          }

          const formData = new FormData();
          formData.append("file", file);

          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APIML_URL}`, {
              method: "POST",
              body: formData,
            });

            // Handle the response from the API
            const data = await response.json();

            // Update the DOM with the response
            const responseElement = document.getElementById("response");
            if (responseElement) {
              let classNameText = data.class_name ? `Class Name: ${data.class_name}` : "Class Name: Not detected";
              let confidenceText = data.probability !== null ? `Confidence: ${data.probability.toFixed(2)}%` : "Confidence: Not detected";

              responseElement.innerHTML = `
          <h1>${classNameText}</h1>
          <h1>${confidenceText}</h1>
        `;
            }
          } catch (error) {
            let errorMessage = "TypeError: Failed to fetch";
            if (error instanceof Error) {
              errorMessage = error.message;
            }
            const responseElement = document.getElementById("response");
            if (responseElement) {
              responseElement.innerHTML = `<h1>Error: ${errorMessage}</h1>`;
            }
          }
        }}
      >
        Predict
      </Button>
      <h1 id="response">--</h1>
    </div>
  );
}
