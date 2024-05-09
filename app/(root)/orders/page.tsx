import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs";
import Image from "next/image";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  return (
    <div className="px-6 py-10 max-sm:px-3">
      <h2 className="text-heading2-bold text-primary text-center mb-10 animate-fade-in-up">
        Your Orders
      </h2>
      {!orders || (orders.length === 0 && (
        <p className="text-body-bold text-red-1 text-center mb-5">
          You have no orders yet.
        </p>
      ))}
      <div className="flex flex-col gap-8">
        {orders?.map((order: OrderType) => (
          <div
            key={order._id}
            className="flex flex-col gap-4 p-6 bg-white border border-grey-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col gap-1 lg:flex-row lg:gap-20">
              <p className="text-base-bold text-primary">Order ID: {order._id}</p>
              <p className="text-base-bold text-primary">
                Total Amount: ${order.totalAmount}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {order.products.map((orderItem: OrderItemType) => (
                <div
                  key={`${order._id}-${orderItem.product._id}`}
                  className="flex gap-4"
                >
                  <Image
                    src={orderItem.product.media[0]}
                    alt={orderItem.product.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-small-medium text-primary">
                      Title:{" "}
                      <span className="text-small-bold text-secondary">
                        {orderItem.product.title}
                      </span>
                    </p>
                    {orderItem.color && (
                      <p className="text-small-medium text-primary">
                        Color:{" "}
                        <span className="text-small-bold text-secondary">
                          {orderItem.color}
                        </span>
                      </p>
                    )}
                    {orderItem.size && (
                      <p className="text-small-medium text-primary">
                        Size:{" "}
                        <span className="text-small-bold text-secondary">
                          {orderItem.size}
                        </span>
                      </p>
                    )}
                    <p className="text-small-medium text-primary">
                      Unit Price:{" "}
                      <span className="text-small-bold text-secondary">
                        ${orderItem.product.price}
                      </span>
                    </p>
                    <p className="text-small-medium text-primary">
                      Quantity:{" "}
                      <span className="text-small-bold text-secondary">
                        {orderItem.quantity}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";
