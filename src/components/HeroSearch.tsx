import React from 'react';
import { Box, Title, Text, TextInput, ActionIcon, Badge } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';

interface HeroSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSelectSuggestion: (value: string) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchTerm,
  onSearchChange,
  onSelectSuggestion,
}) => {
  const suggestions = ['ผลไม้', 'ผัก', 'ไข่ขาว', 'วุ้นเส้น', 'เครื่องปรุง', 'ปลา'];

  return (
    <Box
      p={{ base: 'md', sm: 'xl' }}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #064e3b 100%)',
        borderRadius: 24,
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
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

      <Box style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
        <Badge
          variant="light"
          color="emerald"
          size="sm"
          radius="xl"
          mb="xs"
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
          ● เช็กความปลอดภัยแบบเฉพาะเจาะจงระยะของโรค
        </Badge>

        <Title order={2} fz={{ base: 20, sm: 26 }} fw={700} c="white" mb={6}>
          สงสัยอาหารชนิดไหน? พิมพ์เช็กได้ทันที
        </Title>

        <Text size="sm" c="#cbd5e1" fw={300} mb="md" lh={1.6}>
          พิมพ์ชื่ออาหาร, วัตถุดิบ, หรือค้นหาตามหมวด เช่น{' '}
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

        <Box style={{ position: 'relative' }}>
          <TextInput
            placeholder="ค้นหาชื่ออาหาร เช่น ส้ม, กะหล่ำปลี, วุ้นเส้น, ชาเขียว..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.currentTarget.value)}
            size="md"
            radius="xl"
            leftSection={<IconSearch size={20} color="#94a3b8" />}
            rightSection={
              searchTerm ? (
                <ActionIcon
                  size="sm"
                  variant="subtle"
                  color="gray"
                  onClick={() => onSearchChange('')}
                  title="ล้างค้นหา"
                >
                  <IconX size={16} />
                </ActionIcon>
              ) : null
            }
            styles={{
              input: {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontSize: 14,
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
