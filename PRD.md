# Dorm Marketplace PRD

## 1. Scope Cut

### Real Payments
Real payment integration is excluded because it increases security and legal complexity for a Day 1 prototype.

### Live Chat
Live chat is excluded because students can coordinate handoff outside the platform.

### Advanced Search and Filters
Advanced search is excluded because the MVP only needs a simple item listing flow.

---

## 2. MVP Features

### Item Listing
Users can create marketplace listings for used dorm items.

### View Available Items
Students can browse currently available items.

### Claim Item
Students can claim an item for in-person pickup.

---

## 3. Acceptance Criteria

### Acceptance Criteria 1
Given an item is available

When a student clicks Claim Item

Then the system should reserve the item for that student and prevent other users from claiming it

---

### Acceptance Criteria 2
Given a student claimed an item

When the claim expires before pickup confirmation

Then the item should automatically return to available status

---

### Acceptance Criteria 3
Given a seller sold an item outside the app

When the seller clicks Mark as Sold

Then the item should immediately become unavailable in the marketplace