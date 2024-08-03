import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CircleMinus } from "lucide-react";
import { useState } from "react";

const TagsInput = ({ onTagsChange }) => {
  const [selectedTag, setSelectedTag] = useState('');
  const [tags, setTags] = useState([]);

  const addTag = () => {
    if (selectedTag && !tags.includes(selectedTag) && tags.length < 2) {
      const newTags = [...tags, selectedTag];
      setTags(newTags);
      setSelectedTag('');
      onTagsChange(newTags);
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    setTags(newTags);
    onTagsChange(newTags);
  };
  return (
    <div className="space-y-3">
      {tags.length !== 0 && <>
        <Input className='mb-3' placeholder='Tags' readOnly value={tags.join(', ')} />
        <div className=" flex gap-2 items-center">
          {tags.map(tag => (
            <Badge className='cursor-pointer' onClick={() => removeTag(tag)} key={tag} variant='outline'>{tag}<CircleMinus className="size-3 ml-1 " /></Badge>
          ))}
        </div>
      </>}
      <div className="flex gap-2">
        <Select onValueChange={setSelectedTag}>
          <SelectTrigger>
            <SelectValue placeholder='Select two tags' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tags</SelectLabel>
              <SelectItem value='games'>Game</SelectItem>
              <SelectItem value='movies'>Movies</SelectItem>
              <SelectItem value='fun'>Fun</SelectItem>
              <SelectItem value='freelancing'>Freelancing</SelectItem>
              <SelectItem value='other'>Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button type='button' onClick={addTag} disabled={tags.length >= 2}>Add Tag</Button>
      </div>
    </div>
  )
}

export default TagsInput