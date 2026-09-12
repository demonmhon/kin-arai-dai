import React, { useRef } from 'react';
import { Box, Title, Text, TextInput, ActionIcon, Badge } from '@mantine/core';
import { Search, X } from 'lucide-react';

interface HeroSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSelectSuggestion: (value: string) => void;
  diseaseId?: string;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchTerm,
  onSearchChange,
  onSelectSuggestion,
  diseaseId = 'ckd',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions =
    diseaseId === 'gout'
      ? ['เชอร์รี่', 'อกไก่', 'ยอดผัก', 'เบียร์', 'เครื่องใน', 'ไข่ขาว']
      : ['ผลไม้', 'ผัก', 'ไข่ขาว', 'วุ้นเส้น', 'เครื่องปรุง', 'ปลา'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <Box
      p={{ base: 'sm', sm: 'xl' }}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #064e3b 100%)',
        borderRadius: 16,
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Decorative ambient blur circle */}
      <Box
        style={{
          position: 'absolute',
          right: -30,
          bottom: -30,
          width: 220,
          height: 220,
          borderRadius: '50%',
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Box style={{ position: 'relative', zIndex: 1, maxWidth: 840 }}>
        <Badge
          variant="light"
          color="emerald"
          size="sm"
          radius="xl"
          mb="xs"
          visibleFrom="sm"
          styles={{
            root: {
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              color: '#6ee7b7',
              border: '1px solid rgba(110, 231, 183, 0.3)',
              textTransform: 'none',
              fontWeight: 500,
            },
          }}
        >
          ● เช็กความปลอดภัยแบบเฉพาะเจาะจงระยะและสภาวะสุขภาพ
        </Badge>

        <Title order={2} fz={{ base: 18, sm: 24 }} fw={700} c="white" mb={{ base: 4, sm: 6 }}>
          สงสัยอาหารชนิดไหน? พิมพ์เช็กได้ทันที
        </Title>

        <Text size="xs" c="#cbd5e1" fw={300} mb={{ base: 8, sm: 'md' }} lh={1.4}>
          <Text span visibleFrom="sm">พิมพ์ชื่ออาหาร, วัตถุดิบ, หรือค้นหาตามหมวด เช่น </Text>
          <Text span hiddenFrom="sm">ค้นหาเช่น: </Text>
          {suggestions.map((item, idx) => (
            <React.Fragment key={item}>
              <Text
                span
                c="#6ee7b7"
                fw={500}
                style={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
                onClick={() => onSelectSuggestion(item)}
              >
                "{item}"
              </Text>
              {idx < suggestions.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}
        </Text>

        <Box component="form" role="search" action="" onSubmit={handleSubmit} style={{ position: 'relative' }}>
          <TextInput
            ref={inputRef}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="ค้นหาชื่ออาหาร เช่น ส้ม, กะหล่ำปลี, วุ้นเส้น, ชาเขียว..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.currentTarget.blur();
              }
            }}
            size="md"
            radius="xl"
            leftSection={<Search size={20} color="#94a3b8" />}
            rightSection={
              searchTerm ? (
                <ActionIcon
                  size="sm"
                  variant="subtle"
                  color="gray"
                  onClick={() => onSearchChange('')}
                  title="ล้างค้นหา"
                >
                  <X size={16} />
                </ActionIcon>
              ) : null
            }
            styles={{
              input: {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontSize: 16, // 16px prevents iOS Safari from automatically zooming into inputs
                '&::-webkit-search-cancel-button': {
                  display: 'none',
                },
                '&::-webkit-search-decoration': {
                  display: 'none',
                },
                '&::placeholder': {
                  color: '#94a3b8',
                },
                '&:focus': {
                  borderColor: '#34d399',
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
