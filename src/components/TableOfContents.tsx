import React from 'react';
import { Card, Text } from '@gravity-ui/uikit';
import './TableOfContents.css';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  activeSection?: string;
  onSectionClick: (id: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeSection,
  onSectionClick
}) => {
  return (
    <Card className="toc-card">
      <Text variant="header-2" className="toc-title">
        Содержание
      </Text>
      <div className="toc-list">
        {items.map((item) => (
          <div
            key={item.id}
            className={`toc-item toc-level-${item.level} ${
              activeSection === item.id ? 'toc-active' : ''
            }`}
            onClick={() => onSectionClick(item.id)}
          >
            <Text variant="body-1" className="toc-link">
              {item.title}
            </Text>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TableOfContents;
