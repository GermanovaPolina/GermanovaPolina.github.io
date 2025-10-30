import React from 'react';
import { Card, Text, Button, Icon } from '@gravity-ui/uikit';
import { Calendar, Person, Clock } from '@gravity-ui/icons';
import './Article.css';

interface ArticleProps {
  title: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  content,
  author,
  publishDate,
  readTime
}) => {
  return (
    <Card className="article-card">
      <div className="article-header">
        <Text variant="header-2" className="article-title">
          {title}
        </Text>

        <div className="article-meta">
          <div className="meta-item">
            <Icon data={Person} size={16} />
            <Text variant="body-2" color="secondary">
              {author}
            </Text>
          </div>

          <div className="meta-item">
            <Icon data={Calendar} size={16} />
            <Text variant="body-2" color="secondary">
              {publishDate}
            </Text>
          </div>

          <div className="meta-item">
            <Icon data={Clock} size={16} />
            <Text variant="body-2" color="secondary">
              {readTime}
            </Text>
          </div>
        </div>
      </div>

      <div className="article-content">
        <Text variant="body-1">
          {content}
        </Text>
      </div>

      <div className="article-actions">
        <Button view="action" size="m">
          Поделиться
        </Button>
        <Button view="outlined" size="m">
          Сохранить
        </Button>
      </div>
    </Card>
  );
};

export default Article;
