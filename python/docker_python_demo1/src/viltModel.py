from transformers import ViltProcessor, ViltForQuestionAnswering
from PIL import Image

# Image processing
processor = ViltProcessor.from_pretrained("dandelin/vilt-b32-finetuned-vqa")

# Image processing model
model = ViltForQuestionAnswering.from_pretrained('dandelin/vilt-b32-finetuned-vqa')

def model_pipeline(text:str, image:Image):
    # Impage encoding
    encoding = processor(image, text, return_tensors="pt")

    outputs = model(**encoding)
    logits = outputs.logits
    idx = logits.argmax(-1).item()
    return model.config.id2label[idx]