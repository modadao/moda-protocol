import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Dispatch, SetStateAction } from 'react';

interface DroppableItemProps {
  list: UniqueIdentifier[];
  setList: Dispatch<SetStateAction<UniqueIdentifier[]>>;
  children: React.ReactNode;
}

export function DroppableItem({ list, setList, children }: DroppableItemProps) {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (over && active.id !== over?.id) {
      setList((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={list} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}

interface DraggableItemProps {
  children: React.ReactNode;
  id: UniqueIdentifier;
}

export function DraggableItem({ children, id }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}
